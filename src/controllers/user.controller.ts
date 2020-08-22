import { Request, Response, NextFunction } from 'express'
import errorList from '@config/errorList'
import iUser from '@interfaces/user.interface'
import UserModel from '@models/user.model'
import { generateTokenData, decodeAccessToken } from '@services/token.service'
import { passwordMatch, encryptPassword } from '@services/auth.service'

export default class UserController {
    async create (req: Request, res: Response) {
        const user: iUser = req.body
        
        try {
            user.password = await encryptPassword(user.password)

            const newUser = new UserModel(user)
            await newUser.save()

            const jsonNewUser = newUser.toJSON()
            delete jsonNewUser.password
            delete jsonNewUser.refreshTokens

            return res.status(201).json(jsonNewUser)
        } catch (error) {
            console.error('Error adding user', error)
            return res.status(400).json(errorList.CREATE_USER_ERROR)
        }
    }
    
    async login (req: Request, res: Response) {
        const { email, password } = req.body

        const user = await UserModel.findOne({ email })

        if (!user) {
            return res.status(404).json(errorList.USER_NOT_FOUND)
        }

        if (!await passwordMatch(password, user?.password as string)) {
            return res.status(401).json(errorList.UNAUTHORIZED_ERROR)
        }

        const jsonUser = user?.toJSON()
        delete jsonUser.password
        delete jsonUser.refreshTokens
        
        const signData = { email: jsonUser.email }
        const token = await generateTokenData(signData)
        
        // Add generated refreshToken to user document
        user.refreshTokens.push(token.refreshToken)
        await user.save()

        return res.json({ user: jsonUser, token })
    }

    async refreshToken (req: Request, res: Response) {
        const refreshToken = req.body.refresh_token
        if (!refreshToken) return res.status(401).json(errorList.REFRESHTOKEN_NOT_SENT_ERROR)

        const user = await UserModel.findOne({ refreshTokens: refreshToken })

        if (!user) {
            return res.status(404).json(errorList.USER_NOT_FOUND)
        }
        
        const signData = { email: user.email }
        const token = await generateTokenData(signData)
        
        // Get only the tokens withou the one received
        user.refreshTokens = user.refreshTokens.filter(token => token != refreshToken)
        // Add generated refreshToken to user document
        user.refreshTokens.push(token.refreshToken)
        await user.save()

        return res.json(token)
    }

    async checkToken (req: Request, res: Response, next: NextFunction) {
        const token = req.headers['x-access-token'] as string
        if (!token) return res.status(401).json(errorList.TOKEN_NOT_SENT_ERROR)
        
        try {
            const decoded = await decodeAccessToken(token)
            // @ts-ignore
            req.userEmail = decoded.email
            return next()
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}

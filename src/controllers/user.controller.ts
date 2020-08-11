import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import errorList from '@config/errorList'
import iUser from '@interfaces/user.interface'
import UserModel from '@models/user.model'

export default class UserController {
    async create (req: Request, res: Response) {
        const user: iUser = req.body
        
        try {
            user.password = await encryptPassword(user.password)

            const newUser = new UserModel(user)
            await newUser.save()

            const jsonNewUser = newUser.toJSON()
            delete jsonNewUser.password

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

        if (bcrypt.compareSync(password, user?.password as string)) {
            const jsonUser = user?.toJSON()
            const token = await generateUserToken(jsonUser)
            delete jsonUser.password
            return res.json({ ...jsonUser, token })
        } else {
            return res.status(401).json(errorList.UNAUTHORIZED_ERROR)
        }
    }

    async checkToken (req: Request, res: Response, next: NextFunction) {
        const token = req.headers['x-access-token'] as string
        if (!token) return res.status(401).json(errorList.TOKEN_NOT_SENT_ERROR)
        
        jwt.verify(token, process.env.JWT_SECRET as string, function(err, decoded) {
            if (err) return res.status(500).json(errorList.TOKEN_VERIFY_ERROR)
            // @ts-ignore
            req.userEmail = decoded.email
            next()
        })
    }
}

async function encryptPassword (password: string): Promise<string> {
    return await bcrypt.hash(password, 10)
}

async function generateUserToken (user: iUser): Promise<string> {
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET as string, {
        expiresIn: 300, // 5 min
    })

    return token
}

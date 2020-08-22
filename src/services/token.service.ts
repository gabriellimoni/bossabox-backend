import iToken, { iAccessToken, iRefreshToken } from '@interfaces/token.interface.ts'
import errorList from '@config/errorList'
import jwt from 'jsonwebtoken'

const ACCESS_EXPIRES_IN_SECONDS = 300 // 5min
const REFRESH_EXPIRES_IN_SECONDS = 86400 // 24hr

export async function generateTokenData (signData: Object) {
    const accessTokenData = await generateAccessToken(signData)
    const refreshTokenData = await generateRefreshToken(signData)
    const token: iToken = { ...accessTokenData, ...refreshTokenData }
    return token
}

export function decodeAccessToken (token: string): Promise<any> {
    // Must be promisse because of jwt.verify
    return new Promise ((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET as string, function(err, decoded) {
            if (err) return reject(errorList.TOKEN_VERIFY_ERROR)
            return resolve(decoded)
        })
    })
}

async function generateAccessToken (signData: Object): Promise<iAccessToken> {
    const token = jwt.sign(signData, process.env.JWT_SECRET as string, {
        expiresIn: ACCESS_EXPIRES_IN_SECONDS,
    })

    const accessTokenData: iAccessToken = {
        accessToken: token,
        expiresIn: ACCESS_EXPIRES_IN_SECONDS,
    }

    return accessTokenData
}

async function generateRefreshToken (signData: Object): Promise<iRefreshToken> {
    const token = jwt.sign(signData, process.env.JWT_REFRESH_SECRET as string, {
        expiresIn: REFRESH_EXPIRES_IN_SECONDS,
    })

    const refreshTokenData: iRefreshToken = {
        refreshToken: token,
        refreshExpiresIn: REFRESH_EXPIRES_IN_SECONDS,
    }
    return refreshTokenData
}
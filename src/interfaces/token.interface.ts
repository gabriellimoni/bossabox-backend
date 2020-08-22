export default interface iToken extends iAccessToken, iRefreshToken {}

export interface iAccessToken {
    accessToken: string,
    expiresIn: number,
}

export interface iRefreshToken {
    refreshToken: string,
    refreshExpiresIn: number,
}

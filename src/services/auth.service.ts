import bcrypt from 'bcryptjs'

export async function passwordMatch(password: string, encryptedPassword: string): Promise<boolean> {
    return bcrypt.compareSync(password, encryptedPassword as string)
}

export async function encryptPassword (password: string): Promise<string> {
    return await bcrypt.hash(password, 10)
}
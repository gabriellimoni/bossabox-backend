import iUser from '@interfaces/user.interface'
import { Document, Model, Schema, model } from 'mongoose'

interface iUserDocument extends iUser, Document {
    refreshTokens: String[],
}
interface iUserModel extends Model<iUserDocument> {}
const UserSchema = new Schema<iUserDocument & iUserModel>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    refreshTokens: [ String ],
})

const UserModel: iUserModel = model<iUserDocument, iUserModel>(
    'User',
    UserSchema,
)

export default UserModel
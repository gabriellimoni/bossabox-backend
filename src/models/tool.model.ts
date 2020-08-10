import iTool from '@interfaces/tool.interface'
import { Document, Model, Schema, model } from 'mongoose'

interface iToolDocument extends iTool, Document {}
interface iToolModel extends Model<iToolDocument> {}
const ToolSchema = new Schema<iToolDocument & iToolModel>({})

const ToolModel: iToolModel = model<iToolDocument, iToolModel>(
    'Tool',
    ToolSchema,
)

export default ToolModel
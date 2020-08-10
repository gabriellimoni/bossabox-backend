import iTool from '@interfaces/tool.interface'
import { Document, Model, Schema, model } from 'mongoose'

interface iToolDocument extends iTool, Document {}
interface iToolModel extends Model<iToolDocument> {}
const ToolSchema = new Schema<iToolDocument & iToolModel>({
    title: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [ String ], required: true },
})

const ToolModel: iToolModel = model<iToolDocument, iToolModel>(
    'Tool',
    ToolSchema,
)

export default ToolModel
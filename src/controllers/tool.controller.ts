import { Request, Response } from 'express'
import errorList from '@config/errorList'
import iTool from '@interfaces/tool.interface'
import ToolModel from '@models/tool.model'

export default class ToolController {
    async list (req: Request, res: Response) {
        const filter: { tags?: string } = {}
        if (req.query.tag) {
            filter.tags = req.query.tag as string
        }

        // todo pagination

        try {
            const tools = await ToolModel.find(filter)
            return res.status(200).json(tools)
        } catch (error) {
            console.error('Error listing tools', error)
            return res.status(400).json(errorList.LIST_TOOLS_ERROR)
        }
    }
    
    async create (req: Request, res: Response) {
        const tool: iTool = req.body

        try {
            const newTool = new ToolModel(tool)
            await newTool.save()
            return res.status(201).json(newTool.toJSON())
        } catch (error) {
            console.error('Error adding tool', error)
            return res.status(400).json(errorList.CREATE_TOOL_ERROR)
        }
    }
    
    async delete (req: Request, res: Response) {
        const toolId = req.params.id as string

        try {
            await ToolModel.deleteOne({ _id: toolId })
            return res.status(204).send()
        } catch (error) {
            console.error('Error deleting tool', error)
            return res.status(400).json(errorList.DELETE_TOOL_ERROR)
        }
    }
}
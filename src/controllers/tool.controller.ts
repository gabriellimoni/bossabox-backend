import { Request, Response } from 'express'

import iTool from '@interfaces/tool.interface'
import ToolModel from '@models/tool.model'

export default class ToolController {
    async list (req: Request, res: Response) {
        res.send('list')
    }
    
    async create (req: Request, res: Response) {
        res.send('create')
    }
    
    async delete (req: Request, res: Response) {
        res.send('delete')
    }
}
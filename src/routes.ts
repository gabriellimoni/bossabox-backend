import express from 'express'
import ToolController from '@controllers/tool.controller'
const toolController = new ToolController()

const router = express.Router()

router
    .get('/tools', toolController.list)
    .post('/tools', toolController.create)
    .delete('/tools', toolController.delete)

export default router
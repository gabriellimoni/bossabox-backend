import express from 'express'
import ToolController from '@controllers/tool.controller'
import createToolValidator from '@validators/createTool.validator'
const toolController = new ToolController()

const router = express.Router()

router
    .get('/tools', toolController.list)
    .post('/tools', createToolValidator, toolController.create)
    .delete('/tools/:id', toolController.delete)

export default router
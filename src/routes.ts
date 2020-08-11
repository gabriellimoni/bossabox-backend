import express from 'express'
import ToolController from '@controllers/tool.controller'
import UserController from '@controllers/user.controller'
import createToolValidator from '@validators/createTool.validator'
const toolController = new ToolController()
const userController = new UserController()

const router = express.Router()

router
    .post('/user', userController.create)
    .post('/login', userController.login)
    
    .use(userController.checkToken)
    .get('/tools', toolController.list)
    .post('/tools', createToolValidator, toolController.create)
    .delete('/tools/:id', toolController.delete)


export default router
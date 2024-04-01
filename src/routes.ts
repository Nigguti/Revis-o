import { Router} from 'express'
import userController from './usuario/controllers/user.controller'

const routes = Router()

routes.post('/users', userController.create)
routes.get('/users', userController.findAll)
routes.get('/user/:id', userController.findById)
routes.put('/user/:id', userController.update)
routes.delete('/user/:id', userController.delete)
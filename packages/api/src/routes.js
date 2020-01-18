import { Router } from 'express'

import UserController from './app/controller/UserController'
import WorkerController from './app/controller/WorkerController'
import CodeController from './app/controller/CodeController'

import authMiddleware from './app/middlewares/auth'
import SessionController from './app/controller/SessionController'

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ hello: 'World' })
})
routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.put('/users', UserController.update)
routes.post('/workers', WorkerController.index)
routes.post('/codes', CodeController.store)
routes.post('/codes/current', CodeController.index)
routes.post('/codes/list', CodeController.list)

export default routes

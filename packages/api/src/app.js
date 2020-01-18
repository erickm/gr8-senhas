import 'dotenv/config'
import express from 'express'
import Youch from 'youch'
import * as Sentry from '@sentry/node'
import 'express-async-error'
import routes from './routes'
import cors from 'cors'
import sentryConfig from './config/sentry'
import io from 'socket.io'
import http from 'http'
import './database'

class App {
  constructor() {
    this.app = express()
    this.server = http.Server(this.app)
    Sentry.init(sentryConfig)

    this.socket()

    this.middlewares()
    this.routes()
    if (process.env.NODE_ENV === 'developmet') {
      this.exceptionHandler()
    }

    this.connectedUsers = {}
  }
  socket() {
    this.io = io(this.server)
    this.io.on('connection', socket => {
      const { user_id } = socket.handshake.query
      this.connectedUsers[user_id] = socket.id

      socket.on('disconnect', () => {
        delete this.connectedUsers[user_id]
      })
    })
  }
  middlewares() {
    this.app.use(Sentry.Handlers.requestHandler())

    this.app.use(express.json())
    this.app.use(cors()) // { origin: 'http://localhost:3000/' }

    this.app.use((req, res, next) => {
      req.io = this.io
      req.connectedUsers = this.connectedUsers
      next()
    })
  }

  routes() {
    this.app.use(routes)
    this.app.use(Sentry.Handlers.errorHandler())
  }

  exceptionHandler() {
    this.app.use(async (err, req, res, next) => {
      const errors = await new Youch(err, req).toJSON()

      return res.status(500).json(errors)
    })
  }
}

export default new App().server

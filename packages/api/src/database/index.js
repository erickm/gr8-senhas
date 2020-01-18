import Sequelize from 'sequelize'
import databaseConfig from '../config/database'

import User from '../app/models/User'
import Worker from '../app/models/Worker'
import Code from '../app/models/Code'

const models = [User, Worker, Code]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}
export default new Database()

import Sequelize, { Model } from 'sequelize'
import Code from './Code'

class Worker extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        user_id: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize: connection,
      }
    )
    return this
  }
  static associate(models) {
    this.hasMany(models.Code, { foreignKey: 'worker_id', as: 'codes' })
  }
}
export default Worker

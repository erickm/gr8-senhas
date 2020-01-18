import Sequelize, { Model } from 'sequelize'

class Code extends Model {
  static init(connection) {
    super.init(
      {
        code: Sequelize.STRING,
        worker_id: Sequelize.INTEGER,
        user_id: Sequelize.INTEGER,
        status: Sequelize.STRING,
        active: Sequelize.BOOLEAN,
      },
      {
        sequelize: connection,
      }
    )
    return this
  }
  static associate(models) {
    this.belongsTo(models.Worker, { foreignKey: 'worker_id', as: 'worker' })
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}
export default Code

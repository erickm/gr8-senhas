require('dotenv/config')

module.exports = {
  dialect: 'mysql',
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  define: {
    underscored: true,
    underscoredAll: true,
  },
}

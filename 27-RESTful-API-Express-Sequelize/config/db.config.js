const Sequelize = require("sequelize")

const sequelize = new Sequelize({
  username: "root",
  password: "Deux.1616",
  database: "db_animal",
  host: "localhost",
  dialect: 'mysql',
})

module.exports = sequelize
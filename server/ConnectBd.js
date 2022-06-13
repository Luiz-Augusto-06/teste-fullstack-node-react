//conexão com mysql
const Sequelize = require ('sequelize')
const sequelize = new Sequelize ('automoveis','root','1234', {
    host:'localhost',
    dialect:'myslq'
})

module.exports = {
  Sequelize = Sequelize,
  sequelize = sequelize
}

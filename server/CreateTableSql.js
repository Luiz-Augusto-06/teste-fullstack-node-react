const ConnectBd = require('./ConnectBd')

const TableSql = ConnectBd.sequelize.deine('carros',{
  //tabela base do banco de dados
  veiculo:{
    type: ConnectBd.Sequelize.STRING
  },
  marca:{
    type: ConnectBd.Sequelize.STRING
  },
  ano:{
    type: ConnectBd.Sequelize.INTEGER
  },
  descrição: {
    type: ConnectBd.Sequelize.TEXT
  },
  vendido:{
    type: ConnectBd.Sequelize.BOOL
  },
  created:{
    type: ConnectBd.Sequelize.DATATIME
  }
})

//depois de usar, comentar ou excluí a linha 
TableSql.sync({force:true})

module.exports = TableSql;

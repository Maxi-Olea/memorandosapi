const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')

const MemorandosModel = sequelizeConnection.define(
  'memo',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'idmemorando'
    },
    remitente: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'USUARIO_remitente'
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'fecha_hora'
    },
    message: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'mensaje'
    },
  },
  {
    tableName: 'memorando',
    timestamps: false
  }
)
module.exports = MemorandosModel

const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')

const MemorandosModel = sequelizeConnection.define(
  'memo',
  {
    remitente: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      field: 'remitente'
    },
    date: {
      type: Sequelize.STRING,
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
    tableName: 'memorandos',
    timestamps: false
  }
)
module.exports = MemorandosModel

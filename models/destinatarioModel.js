const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')

const DestinatarioModel = sequelizeConnection.define(
  'destinatario',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    idmemorando: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'MEMORANDO_idmemorando'
    },
    destinatario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'USUARIO_destinatario'
    },
  },
  {
    tableName: 'destinatario',
    timestamps: false
  }
)
module.exports = DestinatarioModel
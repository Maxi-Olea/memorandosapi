const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')

const cityModel = sequelizeConnection.define(
  'ciudad',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'idciudad'
    },
    ciudad: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'ciudad'
    },
    idPais: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'PAIS_idpais'
    }
  },
  {
    tableName: 'ciudad',
    timestamps: false
  }
)
module.exports = cityModel

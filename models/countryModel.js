const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')

const countryModel = sequelizeConnection.define(
  'pais',
  {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
      field: 'idpais'
    },
    pais: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'pais'
    }
  },
  {
    tableName: 'pais',
    timestamps: false
  }
)
module.exports = countryModel

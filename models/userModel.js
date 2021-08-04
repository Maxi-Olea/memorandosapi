const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')

const UserModel = sequelizeConnection.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'idusuario'
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'nombre'
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'apellido'
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'email'
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'username'
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'password'
    },
    ciudad: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'CIUDAD_idciudad'
    }
  },
  {
    tableName: 'usuario',
    timestamps: false
  }
)
module.exports = UserModel

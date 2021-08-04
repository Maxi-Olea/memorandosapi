const Sequelize = require('sequelize')
const { sequelizeConnection } = require('../config/server/sequelizeConfig')
const error = require("../common/error")
const exceptions = require("../common/exceptions")
const config = require("config")

const getById = async (userId) =>{
    console.log("get by id - userId["+ userId +"]");
    const [results] = await sequelizeConnection.
    query("SELECT CONCAT(u.nombre, ' ', u.apellido) remitente, m.fecha_hora, m.mensaje FROM usuario u INNER JOIN memorando m ON m.USUARIO_remitente = u.idusuario INNER JOIN destinatario d ON d.MEMORANDO_idmemorando = m.idmemorando WHERE d.USUARIO_destinatario = " + userId);
    console.log("get memorandos service " + results)
    // if(!){
    //     throw new error.AppError(exceptions.exceptionType.users.notFound)
    // }
    return results;
}

module.exports = {
    getById
}
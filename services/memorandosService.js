const { sequelizeConnection } = require('../config/server/sequelizeConfig')
const error = require("../common/error")
const exceptions = require("../common/exceptions")
const MemorandosModel = require('../models/memorandosModel')
const DestinatarioModel = require('../models/destinatarioModel')

const getById = async (userId) =>{
    const results = await sequelizeConnection.
    query(`CALL memorandos_recibidos(${userId})`)
    return results;
}

const getSentById = async (userId) => {
    const results = await sequelizeConnection.
    query(`CALL memorandos_enviados(${userId})`)
    return results
}

const createMemorando = async (memorando) => {
    const memo = await MemorandosModel.create(memorando)
    return memo.dataValues
}

const linkToDestinatario = async (destinatario) => {
    const dest = await DestinatarioModel.create(destinatario)
    return dest
}

const deleteMemorando = async (idMemo) => {
    try {
        return await DestinatarioModel.destroy({where:{id:idMemo}})
      } catch (e) {
        const errorMessage = `Delete Memorando - Detail: ` + e.message
        console.error("DeleteMemo - ["+ idMemo+"]");
        throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeDeleted, errorMessage)
      }
}

module.exports = {
    getById,
    getSentById,
    createMemorando,
    linkToDestinatario,
    deleteMemorando
}
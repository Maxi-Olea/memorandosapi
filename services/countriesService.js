const error = require("../common/error")
const exceptions = require("../common/exceptions")
const countryModel= require('../models/countryModel')

const getAll = async ({idPais, pais}) =>{
  console.log("getAll - idpais["+idPais +"] - pais["+pais+"]");
  const whereFilter ={}
  const filterAtr = ['idpais', 'pais']

  if(idPais){
      whereFilter.idpais = idPais
  }
  if(pais){
      whereFilter.pais = pais
  }
  console.log("getAll - whereFilter["+whereFilter +"]")

  const paises = await countryModel.findAll({
      attributes: filterAtr,
      where: whereFilter
    });
  console.log("get country service "+paises)
  return paises;
}

const getById = async (paisId) =>{
    const pais = await countryModel.findByPk(paisId, {
      attributes: [ 'pais']
    });
  if(!pais){
      throw new error.AppError(exceptions.exceptionType.paises.notFound)
  }
  return pais;
}

const createCountry = async (data) => {
    try {
      return await countryModel.create(data)
    } catch (e) {
      const errorMessage = `createCountry - Detail: ` + e.message
      throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeCreated, errorMessage)
    }
  }

const updateCountry = async (idpais, data) => {
    try {
      return await countryModel.update(data, {where:{id:idpais}})
    } catch (e) {
      const errorMessage = `Update Country - Detail: ` + e.message
      throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeUpdated, errorMessage)
    }
  }

const deleteCountry = async (idpais) => {
  try {
    return await countryModel.destroy({where:{id:idpais}})
  } catch (e) {
    const errorMessage = `Delete Country - Detail: ` + e.message
    throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeDeleted, errorMessage)
  }
}

module.exports = {
  getAll,
  getById,
  createCountry,
  updateCountry,
  deleteCountry
}
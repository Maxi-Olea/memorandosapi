const error = require("../common/error")
const exceptions = require("../common/exceptions")
const cityModel= require('../models/cityModel')

const getAll = async ({idCiudad, ciudad}) =>{
  const whereFilter ={}
  const filterAtr = ['idciudad', 'ciudad', 'PAIS_idpais']

  if(idCiudad){
      whereFilter.id = idCiudad
  }
  if(ciudad){
      whereFilter.ciudad = ciudad
  }

  const ciudades = await cityModel.findAll({
      attributes: filterAtr,
      where: whereFilter
    });

  return ciudades;
}

const getById = async (cityId) =>{
  const city = await cityModel.findByPk(cityId, {
      attributes: [ 'ciudad']
    });
  if(!city){
      throw new error.AppError(exceptions.exceptionType.cities.notFound)
  }
  return city;
}

const getByCountryId = async (countryId) => {
  const cities = await cityModel.findAll(
    {
      where: {
        idPais: countryId
      },
      attributes: ['id', 'ciudad']
    }
  )
  if(!cities) {
    throw new error.AppError(exceptions.exceptionType.cities.notFound)
  }
  return cities
}

const createCity = async (data) => {
    try {
      return await cityModel.create(data)
    } catch (e) {
      const errorMessage = `createCity - Detail: ` + e.message
      throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeCreated, errorMessage)
    }
  }

const updateCity = async (idciudad, data) => {
    try {
      return await cityModel.update(data, {where:{id:idciudad}})
    } catch (e) {
      const errorMessage = `Update City - Detail: ` + e.message
      throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeUpdated, errorMessage)
    }
  }

const deleteCity = async (idcity) => {
  try {
    return await cityModel.destroy({where:{id:idcity}})
  } catch (e) {
    const errorMessage = `Delete Country - Detail: ` + e.message
    throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeDeleted, errorMessage)
  }
}

module.exports = {
  getAll,
  getById,
  getByCountryId,
  createCity,
  updateCity,
  deleteCity
}
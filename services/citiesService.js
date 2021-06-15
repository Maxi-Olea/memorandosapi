const error = require("../common/error")
const exceptions = require("../common/exceptions")
const cityModel= require('../models/cityModel')

const getAll = async ({idCiudad, ciudad}) =>{
  console.log("getAll - idCiudad["+idCiudad +"] - ciudad["+ciudad+"]");
  const whereFilter ={}
  const filterAtr = ['idciudad', 'ciudad', 'PAIS_idpais']

  if(idCiudad){
      whereFilter.id = idCiudad
  }
  if(ciudad){
      whereFilter.ciudad = ciudad
  }
  console.log("getAll - whereFilter["+whereFilter +"]")

  const ciudades = await cityModel.findAll({
      attributes: filterAtr,
      where: whereFilter
    });
  console.log("get city service "+ciudad)
  return ciudades;
}

const getById = async (cityId) =>{
  console.log("get by id service - cityId["+ cityId+"]");
  const city = await cityModel.findByPk(cityId, {
      attributes: [ 'ciudad']
    });
  console.log("get city service "+city)
  if(!city){
      throw new error.AppError(exceptions.exceptionType.cities.notFound)
  }
  return city;
}

const createCity = async (data) => {
    console.log("createCity - city["+ data.ciudad+"]");
    console.log("createCity - data["+ JSON.stringify(data)+"]");
    try {
      return await cityModel.create(data)
    } catch (e) {
      const errorMessage = `createCity - Detail: ` + e.message
      console.error("createCity - ciudad["+ data.ciudad+"]");
      throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeCreated, errorMessage)
    }
  }

const updateCity = async (idciudad, data) => {
    console.log("updateCity - id["+ idciudad+"]");
    console.log("updateCity - data["+ JSON.stringify(data)+"]");
    try {
      return await cityModel.update(data, {where:{id:idciudad}})
    } catch (e) {
      const errorMessage = `Update City - Detail: ` + e.message
      console.error("updateCity - City["+ data.ciudad+"]");
      throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeUpdated, errorMessage)
    }
  }

const deleteCity = async (idcity) => {
  console.log("deleteCountry - id["+ idcity+"]");
  try {
    return await cityModel.destroy({where:{id:idcity}})
  } catch (e) {
    const errorMessage = `Delete Country - Detail: ` + e.message
    console.error("DeleteCountry - ["+ idcity+"]");
    throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeDeleted, errorMessage)
  }
}



module.exports = {
  getAll,
  getById,
  createCity,
  updateCity,
  deleteCity
}
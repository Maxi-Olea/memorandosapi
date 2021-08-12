const cityService = require("../services/citiesService")

const getAll = async (req,res) => {
    const {id, ciudad} = req.query
    //console.log("INIT GET cities:"+ JSON.stringify({id, ciudad}))
    const cities = await cityService.getAll({id, ciudad});
    //console.log("response controller "+ JSON.stringify(cities))
    return res.status(200).json(cities)
}

const getById = async (req,res) => {
    //console.log(req.params);
    const params = req.params
    const cityId = params.id
    const city = await cityService.getById(cityId);
    //console.log("response controller "+ JSON.stringify(city))
    return res.status(200).json(city)
}

const getByCountryId = async (req, res) => {
    //console.log(req.params)
    const countryId = req.params.id
    const cities = await cityService.getByCountryId(countryId)
    return res.status(200).json(cities)
}

const createCity = async (req,res) => {
    const data = req.body
    //console.log("Crear ciudad:"+ JSON.stringify(data))
    //console.log("ciudad= "+ JSON.stringify(data.city))
    if(!data.ciudad) {
        console.log("No city in the CREATE CITY data: "+ JSON.stringify(data))
        return res.status(400).json()
    }
    const newCity = await cityService.createCity(data);
    //console.log("response controller "+ JSON.stringify(newCity))
    return res.status(201).json(newCity)

}

const updateCity = async (req,res) => {
    const data = req.body
    const {id} = req.params
    //console.log("actualizar ciudad data :"+ JSON.stringify(data + " - id:" + id));
    const city = await cityService.updateCity(id, data);
    //console.log("response controller "+ JSON.stringify(city))
    return res.status(200).json(city)

}

const deleteCity = async (req, res) => {
    const {id} = req.params
    //console.log("Eliminar el pais " + id)
    const deleted = await cityService.deleteCity(id)
    //console.log("response controller " + JSON.stringify(deleted))
    return res.status(200).json(deleted)
}

module.exports = {
    getAll,
    getById,
    getByCountryId,
    createCity,
    updateCity,
    deleteCity
}
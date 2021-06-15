const countryService = require("../services/countriesService")

const getAll = async (req,res) => {
    const {idPais, pais} = req.query
    console.log("INIT GET paises:"+ JSON.stringify({idPais, pais}))
    const countries = await countryService.getAll({idPais, pais});
    console.log("response controller "+ JSON.stringify(countries))
    return res.status(200).json(countries)
}

const getById = async (req,res) => {
    console.log(req.params);
    const params = req.params
    const PaisId = params.id
    const Pais = await countryService.getById(PaisId);
    console.log("response controller "+ JSON.stringify(Pais))
    return res.status(200).json(Pais)
}


const createCountry = async (req,res) => {
    const data = req.body
    console.log("Crear pais:"+ JSON.stringify(data))
    console.log("data.id= "+ JSON.stringify(data.idpais))
    if(!data.id) {
        console.log("No countryId in the CREATE COUNTRY data: "+ JSON.stringify(data))
        return res.status(400).json()
    }
    const newCountry = await countryService.createCountry(data);
    console.log("response controller "+ JSON.stringify(newCountry))
    return res.status(201).json(newCountry)

}

const updateCountry = async (req,res) => {
    const data = req.body
    const {id} = req.params
    console.log("actualizar pais data :"+ JSON.stringify(data + " - id:" + id));
    const country = await countryService.updateCountry(id, data);
    console.log("response controller "+ JSON.stringify(country))
    return res.status(200).json(country)

}

const deleteCountry = async (req, res) => {
    const {id} = req.params
    console.log("Eliminar el pais " + id)
    const deleted = await countryService.deleteCountry(id)
    console.log("response controller " + JSON.stringify(deleted))
    return res.status(200).json(deleted)
}

module.exports = {
    getAll,
    getById,
    createCountry,
    updateCountry,
    deleteCountry
}
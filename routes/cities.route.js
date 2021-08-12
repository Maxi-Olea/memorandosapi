const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const citiesController = require("../controllers/cities.controller")

router.get('/', (req, res) => {
  routeController.handleRequest(req, res, citiesController.getAll)
})

router.get('/:id', (req, res) => {
  //console.log("get by id route cities" + JSON.stringify(req.params));
  routeController.handleRequest(req, res, citiesController.getById)
})

router.get('/bycountry/:id', (req, res) => {
  //console.log("Get cities by CountryId - " + JSON.stringify(req.params))
  routeController.handleRequest(req, res, citiesController.getByCountryId)
})

router.post('/', (req, res) => {
  //console.log("create route cities" +req.body);
  routeController.handleRequest(req, res, citiesController.createCity)
})

router.patch('/:id', (req, res) => {
  //console.log("patch route cities body " +JSON.stringify(req.body) +" - params" + JSON.stringify(req.params));
  routeController.handleRequest(req, res, citiesController.updateCity)
})

router.delete('/:id', (req, res) => {
  //console.log("delete route cities" + JSON.stringify(req.params))
  routeController.handleRequest(req, res, citiesController.deleteCity)
})

module.exports = router
const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const countriesController = require("../controllers/countries.controller")

router.get('/', (request, response) => {
  routeController.handleRequest(request, response, countriesController.getAll)
})

router.get('/:id', (request, response) => {
  console.log("get by id route paises" +request.params);
  routeController.handleRequest(request, response, countriesController.getById)
})

router.post('/', (request, response) => {
  console.log("create route paises" +request.body);
  routeController.handleRequest(request, response, countriesController.createCountry)
})

router.patch('/:id', (request, response) => {
  console.log("patch route paises body " +JSON.stringify(request.body) +" - params" + JSON.stringify(request.params));
  routeController.handleRequest(request, response, countriesController.updateCountry)
})

router.delete('/:id', (req, res) => {
  console.log("delete route paises" + JSON.stringify(req.params))
  routeController.handleRequest(req, res, countriesController.deleteCountry)
})

module.exports = router
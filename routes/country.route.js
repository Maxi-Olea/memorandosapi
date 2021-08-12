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
  routeController.handleRequest(request, response, countriesController.createCountry)
})

router.patch('/:id', (request, response) => {
   routeController.handleRequest(request, response, countriesController.updateCountry)
})

router.delete('/:id', (req, res) => {
  routeController.handleRequest(req, res, countriesController.deleteCountry)
})

module.exports = router
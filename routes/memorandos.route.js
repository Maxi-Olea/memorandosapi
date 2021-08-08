const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const memorandosController = require("../controllers/memorandos.controller")

router.get('/:id',(req,res) => {
    console.log("get bt id route" + req.params);
    routeController.handleRequest(req, res, memorandosController.getById)
  });

router.get('/sent/:id',(req,res) => {
    console.log("get bt id route" + req.params);
    routeController.handleRequest(req, res, memorandosController.getSentById)
  });

router.post('/', (req, res) => {
  routeController.handleRequest(req, res, memorandosController.createMemorando)
});
  

  module.exports = router
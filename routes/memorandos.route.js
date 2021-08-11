const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const memorandosController = require("../controllers/memorandos.controller")
const auth = require("../middlewares/auth")

router.get('/:id',[auth.required],(req,res) => {
    console.log("get bt id route" + req.params);
    routeController.handleRequest(req, res, memorandosController.getById)
  });

router.get('/sent/:id',[auth.required],(req,res) => {
    console.log("get bt id route" + req.params);
    routeController.handleRequest(req, res, memorandosController.getSentById)
  });

router.post('/', (req, res) => {
  routeController.handleRequest(req, res, memorandosController.createMemorando)
});

router.delete('/:id', (req, res) => {
  console.log('delete memorando by Id', req.params.id)
  routeController.handleRequest(req, res, memorandosController.deleteMemorando)
})
  

  module.exports = router
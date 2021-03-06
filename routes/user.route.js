const express = require('express')
const router = express.Router({ mergeParams: true })
const UserController = require("../controllers/user.controller")
const routeController = require("../common/route.controller")
const auth = require("../middlewares/auth")


router.get("/",[auth.required], (req,res)=>{
    routeController.handleRequest(req, res, UserController.getAll)
})

router.get('/:id',(req,res) => {
    routeController.handleRequest(req, res, UserController.getById)
  });
  
  router.delete('/:id',(req,res) => {
    const params = req.params
    const userId = params.id
    routeController.handleRequest(req, res, UserController.deleteUser)
    res.send("delete by id" + userId)
  });
  
  router.patch('/:username',(req,res) => {
    routeController.handleRequest(req, res, UserController.updatePassword)
  });

  
  router.post('/',(req, res) => {
    routeController.handleRequest(req, res, UserController.createUser)
  });

module.exports = router
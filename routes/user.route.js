const express = require('express')
const router = express.Router({ mergeParams: true })
const UserController = require("../controllers/user.controller")
const routeController = require("../common/route.controller")
const auth = require("../middlewares/auth")


router.get("/", (req,res)=>{
    console.log(req.query);
    routeController.handleRequest(req, res, UserController.getAll)
})

router.get('/:id',(req,res) => {
    console.log("get bt id route" +req.params);
    routeController.handleRequest(req, res, UserController.getById)
  });
  
  router.delete('/:id',(req,res) => {
    console.log(req.params);
    const params = req.params
    const userId = params.id
    routeController.handleRequest(req, res, UserController.deleteUser)
    res.send("delete by id" + userId)
  });
  
  router.patch('/:username',(req,res) => {
    setTimeout(() => {
        
    
    console.log("username: ", req.params);
    routeController.handleRequest(req, res, UserController.updatePassword)
    
  }, 5000)
  });

  //  router.put('/:id',(req,res) => {
  //   console.log(req.params);
  //   const params = req.params
  //   const userId = params.id
  //   res.send("put by id")
  // });
  
  router.post('/',(req, res) => {
    routeController.handleRequest(req, res, UserController.createUser)
  });

module.exports = router
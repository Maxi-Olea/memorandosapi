const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const UserController = require("../controllers/user.controller")

router.post('/', (req, res) => {
  routeController.handleRequest(req, res, UserController.login)
})


module.exports = router
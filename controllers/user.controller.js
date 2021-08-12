const userService = require("../services/userService")

const getAll = async (req,res) => {
    const query = req.query
    //console.log("INIT GET USERs")
    const users = await userService.getAll(query);
    //console.log("response controller "+ JSON.stringify(users))
    return res.status(200).json(users)
}

const getById = async (req,res) => {
    //console.log(req.params);
    const params = req.params
    const userId = params.id
    const user = await userService.getById(userId);
    //console.log("response controller "+ JSON.stringify(user))
    return res.status(200).json(user)
}

const createUser = async (req,res) => {
    const data = req.body
    //console.log(JSON.stringify(req.body))
    //console.log("INIT CREATE USER  data:" + JSON.stringify(data))
    if(!data.username){
        console.log("no name in  CREATE USER  data:" + JSON.stringify(data))
        return res.status(400).json()
    } 
    const newUser = await userService.createUser(data);
    //console.log(JSON.stringify(newUser))
    return res.status(201).json(newUser)
}

const deleteUser = async (req,res) => {
    const {id} = req.params
    //console.log("Delete user id: " + id)
    const deleted = await userService.deleteUser(id)
    //console.log("response controller " + JSON.stringify(deleted))
    return res.status(200).json(deleted)
}

const login = async (req, res) => {
    const data = req.body
    //console.log("login - data en user.controller: " + JSON.stringify(data))
    const userInfo = await userService.login(data)
    res.json(userInfo)
  }
  
  const updatePassword = async (req, res) => {
    const data = req.body
    //console.log("data received: " + JSON.stringify(data))
    //console.log("email: " + data.email)
    //console.log("username 2: ", req.params)
    const username = req.body.username
    //console.log("username 3: ", username)
    //console.log("Reset Password: " + username)
    const hashedNewPass = await userService.updatePassword(username, data)
    res.json(hashedNewPass)
  }

module.exports = {
    createUser,
    deleteUser,
    getAll,
    getById,
    login,
    updatePassword
}
const error = require("../common/error")
const exceptions = require("../common/exceptions")
const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require("config")


const createUser = async ({name, lastName, email, username, password, idCiudad}) => {

    const data = {
      name: name,
      lastName: lastName,
      email: email,
      username: username.toLowerCase(),
      password: encryptPassword(password),
      ciudad: idCiudad,
    }
 
    try {
      return await UserModel.create(data)
    } catch (e) {
      const errorMessage = `Create User - Detail: ` + e.message
      console.error("createUser - username["+ username+"]");
      throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeCreated, errorMessage)
    }
  }

  const encryptPassword = userPassword => {
    const salt = bcrypt.genSaltSync()
    return bcrypt.hashSync(userPassword, salt)
  }

  const comparePass = (userPass, hashedPass) => {
    return bcrypt.compare(userPass,hashedPass)
  }

const getAll = async (query) =>{
    const users = await UserModel.findAll();
    return users;
}

const deleteUser = async (idUser) => {
  try {
    return await UserModel.destroy({where:{id:idUser}})
  } catch (e) {
    const errorMessage = `Delete User - Detail: ` + e.message
    console.error("DeleteUser - ["+ idUser+"]");
    throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeDeleted, errorMessage)
  }
}

const getById = async (userId) =>{
    const user = await UserModel.findByPk(userId);
    if(!user){
        throw new error.AppError(exceptions.exceptionType.users.notFound)
    }
    return user;
}

const login = async ({username, password}) => {
  const user = await UserModel.findOne({where: {username:username.toLowerCase()}})
  const isMatch = user && (await comparePass(password,user.password))
  if(!isMatch){
    throw new error.AppError(exceptions.exceptionType.users.invalidPassword)
  }
  const id = user.id
  const token = generateToken(user.id,user.username)
  return {id, token}
}

const generateToken = (id,username)=>{
 return jwt.sign({
   id:id,
   username:username
 },config.get("auth.secret"),{
   expiresIn: config.get("auth.tokenExpire")
 })
}

const updatePassword = async (username, data) => {
  const user = await UserModel.findOne({where: {username:username.toLowerCase()}})
  if(data.email.toLowerCase() === user.email.toLowerCase()) {
    const newPass = encryptPassword(data.password)
    try {
      return await UserModel.update({password:newPass}, {where:{username: username.toLowerCase()}})
    } catch (e) {
      const errorMessage = `Update User - Detail: ` + e.message
      console.error("updateUser - ["+ username +"]");
      throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeUpdated, errorMessage)
    }
  } else {
    throw new error.AppError(exceptions.exceptionType.users.email, 'The email inserted does not match!')
    //console.log("email doesn't match")
  }
  const newPassword = data.password
  const password = encryptPassword(newPassword)
  
}

module.exports = {
    createUser,
    deleteUser,
    getAll,
    getById,
    login,
    updatePassword
}
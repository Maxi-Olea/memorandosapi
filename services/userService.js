const error = require("../common/error")
const exceptions = require("../common/exceptions")
const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require("config")
// const logger = require('../config/server/logger')(__filename)



const createUser = async ({name, lastName, email, userName, password, idCiudad}) => {
    // logger.info(`createUser - userName[${userName}]`)
    console.log("createUser - userName["+ userName+"]");
    const data = {
      name: name,
      lastName: lastName,
      email: email,
      userName: userName.toLowerCase(),
      password: encryptPassword(password),
      ciudad: idCiudad,
      //createdAt: new Date(),
      //updatedAt: new Date()
    }
    console.log("createUser - data["+ JSON.stringify(data)+"]");
    try {
      return await UserModel.create(data)
    } catch (e) {
      const errorMessage = `Create User - Detail: ` + e.message
      // logger.error(errorMessage)
      console.error("createUser - userName["+ userName+"]");
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
    console.log("getAll - query["+ JSON.stringify(query)+"]");
    const users = await UserModel.findAll();
    console.log("get user service "+users)
    return users;
}

const deleteUser = async (idUser) => {
  console.log("deleteUser - id[" + idUser + "]");
  try {
    return await UserModel.destroy({where:{id:idUser}})
  } catch (e) {
    const errorMessage = `Delete User - Detail: ` + e.message
    console.error("DeleteUser - ["+ idUser+"]");
    throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeDeleted, errorMessage)
  }
}

const getById = async (userId) =>{
    console.log("get by id - userId["+ userId+"]");
    const user = await UserModel.findByPk(userId);
    console.log("get user service "+user)
    if(!user){
        throw new error.AppError(exceptions.exceptionType.users.notFound)
    }
    return user;
}

const login = async ({userName, password}) => {
  console.log("login - userName["+ userName+"]"+ " - password["+ password+"]" );
  const user = await UserModel.findOne({where: {userName:userName.toLowerCase()}})
  const isMatch = user && (await comparePass(password,user.password))
  if(!isMatch){
    throw new error.AppError(exceptions.exceptionType.users.invalidPassword)
  }
  const token = generateToken(user.id,user.userName)
  return {token}
}

const generateToken = (id,userName)=>{
 return jwt.sign({
   id:id,
   userName:userName
 },config.get("auth.secret"),{
   expiresIn: config.get("auth.tokenExpire")
 })
}

const updatePassword = async (userName, data) => {
  console.log("Update password for User - " + JSON.stringify(userName))
  const user = await UserModel.findOne({where: {userName:userName.toLowerCase()}})
  if(data.email.toLowerCase() === user.email.toLowerCase()) {
    console.log("email for user " + userName + " match!")
    const newPass = encryptPassword(data.password)
    try {
      return await UserModel.update({password:newPass}, {where:{username: userName.toLowerCase()}})
    } catch (e) {
      const errorMessage = `Update User - Detail: ` + e.message
      console.error("updateUser - ["+ userName +"]");
      throw new error.AppError(exceptions.exceptionType.database.entity.canNotBeUpdated, errorMessage)
    }
  } else {
    console.log("email doesn't match")
  }
  const newPassword = data.password
  console.log("Reset Password by id: " + idUser + " New Password: " + newPassword)
  const password = encryptPassword(newPassword)
  console.log("HashedPassword: " + password)
  
}

module.exports = {
    createUser,
    deleteUser,
    getAll,
    getById,
    login,
    updatePassword
}
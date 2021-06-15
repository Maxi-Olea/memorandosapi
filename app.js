const express = require('express')
const router = express.Router()
const app = express()
const passport = require('passport')
const passportConfig = require('./config/server/passportConfig')
const config = require('config')
const apiPrefix = config.get('apiPrefix')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use(apiPrefix + '/login', require('./routes/login.route'))
app.use(apiPrefix + '/users', require('./routes/user.route'))
app.use(apiPrefix + '/countries', require('./routes/country.route'))

// add router in the Express app.
app.use("/", router);

// pass passport for configuration
passport.use(passportConfig.createStrategy())
app.use(passport.initialize())

app.listen(3000,() => {
  console.log("Started on PORT 3000");
})
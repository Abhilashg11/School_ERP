const express = require('express')
const userDataRouter = express.Router()
const {AllUsers} = require('../controllers/userDataController')


userDataRouter.get('/allUsers',AllUsers)

module.exports = userDataRouter
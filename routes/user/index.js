const express = require('express')
const router = express.Router()

const { getUsers } = require('./get-user')

router.get('/', getUsers)

module.exports = router

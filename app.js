const express = require('express')


const userRouter = require('./routes/user')

const app = express()

// Set up cors
const path = require('path')
app.use(express.static(path.join(__dirname, '/public')))

// The default route should just be a 404 to minimize attack surface
app.get('/', function (req, res) {
  res.status(404).json({ error: 'Not Authorized' })
})


app.use('/users', userRouter)


module.exports = app

// INITIALIZATION
const express = require('express')
const app = express()
const config = require('./config')

app.use(express.static('static'))

// MONGOOSE SETUP & INITIALIZATION
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(config.mongoDBhost, 
  {useNewUrlParser: true, useCreateIndex: true, autoIndex: false})

// MIDDLEWARE



// ROUTES
const booksRoutes = require('./routes/books')(express)
//const authorRoutes = require('./routes/authors')
app.use('/books', booksRoutes)
//app.use('/authors', authorRoutes)

// START THE SERVER
app.listen(config.PORT, ()=>{
  console.log(`Server started on port ${config.PORT}`)
})
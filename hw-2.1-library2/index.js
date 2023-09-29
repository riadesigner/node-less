require("dotenv").config()
const express = require('express')


const PORT = process.env.PORT || 3001

const logger = require('./middleware/logger')

const booksGetAllRoute = require('./routes/books-get-all') 
const bookAddNewRoute = require('./routes/book-add-new')
const bookDeleteByIdRoute = require('./routes/book-delete-by-id') 
const bookUpdateByIdRoute = require('./routes/book-update-by-id') 
const bookGetByIdRoute = require('./routes/book-get-by-id')
const bookDownloadByIdRoute = require('./routes/book-download-by-id') 

const loginRoute = require('./routes/login') 
const indexRoute = require('./routes/index') 
const errorRoute= require('./routes/err-404') 

const app = express()
app.use(express.json())

app.use('/',logger)
app.use('/api/books',booksGetAllRoute)
app.use('/api/books',bookAddNewRoute)
app.use('/api/books/:id',bookDeleteByIdRoute)
app.use('/api/books/:id',bookUpdateByIdRoute)
app.use('/api/books/:id',bookGetByIdRoute)
app.use('/api/books/:id/download',bookDownloadByIdRoute)
app.use('/api/user/login',loginRoute)

app.use('/',indexRoute)
app.use(errorRoute)


app.listen(PORT,()=>{
    console.log("ok!");
})
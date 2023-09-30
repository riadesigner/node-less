require("dotenv").config()

const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 3001

// ----------------
//    MIDDLEWARE
// ---------------- 
const logger = require('./middleware/logger')

// ------------
//    ROUTES
// ------------ 
const r_booksGetAll = require('./routes/books-get-all') 
const r_bookAddNew = require('./routes/book-add-new')
const r_bookGetById = require('./routes/book-get-by-id')
const r_bookDeleteById = require('./routes/book-delete-by-id') 
const r_bookUpdateById = require('./routes/book-update-by-id') 
const r_bookDownloadById = require('./routes/book-download-by-id') 
const r_bookUploadCoverById = require('./routes/book-upload-cover-by-id') 
const r_bookUploadById = require('./routes/book-upload-by-id') 

const r_loginRoute = require('./routes/login') 
const r_index = require('./routes/index') 
const r_error= require('./routes/err-404') 

// ------------
//    SERVER
// ------------ 
const app = express()
app.use(express.json())

app.use('/',logger)
app.use('/api/books',r_booksGetAll)
app.use('/api/books',r_bookAddNew)
app.use('/api/books',r_bookGetById)
app.use('/api/books',r_bookDeleteById)
app.use('/api/books',r_bookUpdateById)
app.use('/api/books',r_bookUploadCoverById)
app.use('/api/books',r_bookUploadById)
app.use('/api/books',r_bookDownloadById)


const public_path = path.join(__dirname+'/public')
app.use('/public',express.static(public_path))

app.use('/api/user/login',r_loginRoute)
app.use('/',r_index)
app.use(r_error)



app.listen(PORT,()=>{
    console.log("ok!");
})
const express = require('express')
const router = express.Router()
const store = require('../store')
const Book = require('../book.js')

router.post('/',(req,res)=>{
    const {books} = store
    const {title,description,authors,favorite,fileCover,fileName,fileBook} = req.body
    const opt = {title,description,authors,favorite,fileCover,fileName,fileBook}
    const newBook = new Book(opt)
    books.push(newBook)
    res.status(201)
    res.json(newBook)    
})


module.exports = router;

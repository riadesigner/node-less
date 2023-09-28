require("dotenv").config()
const express = require('express')
const {v4:uuid} = require('uuid')
const Book = require('./book.js')

const PORT = process.env.PORT || 3001

const router = express.Router();

const errorRout = require('./routes/err-404') 

const store = {books:[]}

const app = express()

app.use(express.json())

app.use('/',errorRout)

app.get('/',(req,res)=>{
    res.status(201)
    const goto = 'localhost:3000/api/books';
    res.send(`перейдите на страницу: <a href="http://${goto}">${goto}</a>`)     
})

app.get('/api/user/login',(req,res)=>{
    const user = { id: 1, mail: "test@mail.ru" };
    res.status(201)
    res.json(user)
})

app.get('/api/books',(req,res)=>{
    const {books} = store
    res.status(201)
    res.json(books)
})

app.get('/api/books/:id',(req,res)=>{    
    const {books} = store
    const {id} = req.params
    const idx = books.findIndex(el=>el.id===id)
    if(idx!==-1){
        res.json(books[idx])
    }else{
        res.status(404)
        res.json('404 | книга не найдена')
    }
})

app.post('/api/books/',(req,res)=>{
    const {books} = store
    const {title,description,authors,favorite,fileCover,fileName} = req.body
    const opt = {title,description,authors,favorite,fileCover,fileName}
    const newBook = new Book(opt)
    books.push(newBook)
    res.status(201)
    res.json(newBook)    
})

app.put('/api/books/:id',(req,res)=>{
    const {books} = store
    const {id} = req.params
    const {title,description,authors,favorite,fileCover,fileName} = req.body
    const opt = {title,description,authors,favorite,fileCover,fileName}
    const idx = books.findIndex(el=>el.id===id)
    if(idx !== -1){        
        books[idx].update(opt)
        res.status(201)
        res.json(books[idx])
    }else{
        res.status(404)
        res.json('404 | страница не найдена')
    }
})

app.delete('/api/books/:id',(req,res)=>{
    const {books} = store
    const {id} = req.params
    const idx = books.findIndex(el=>el.id===id)
    if(idx !== -1){
        books.splice(idx,1)
        res.status(201)
        res.json('ok')
    }else{
        res.status(404)
        res.json('404 | страница не найдена')        
    }
})


app.listen(PORT,()=>{
    console.log("ok!");
})
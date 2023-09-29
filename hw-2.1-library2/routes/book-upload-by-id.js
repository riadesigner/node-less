const express = require('express')
const router = express.Router()
const store = require('../store')
const multer = require('../middleware/file-book')

router.post('/:id/upload',multer.single('book-file'),(req,res)=>{
    const {books} = store
    const {id} = req.params

    if(req.file){
        const {path} = req.file;                
        
        const idx = books.findIndex(el=>el.id===id)
        books[idx].fileBook = path;

        const answer = `книга (id): ${id.toString()}, файл книги: ${path}`;
        console.log(answer)        
        res.status(201)
        res.json(answer)
    }else{
        res.status(201)
        res.json('201 | файл книги то прикрепите')        
    }
})

module.exports = router;
const express = require('express')
const router = express.Router()
const store = require('../store')

router.put('/:id',(req,res)=>{
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
        res.json('404 | книга не найдена')
    }
})


module.exports = router;
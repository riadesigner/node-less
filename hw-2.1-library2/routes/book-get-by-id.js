const express = require('express')
const router = express.Router()
const store = require('../store')

router.get('/',(req,res)=>{    
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

module.exports = router;
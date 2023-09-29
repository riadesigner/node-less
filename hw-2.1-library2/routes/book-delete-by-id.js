const express = require('express')
const router = express.Router()
const store = require('../store')

router.delete('/',(req,res)=>{
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

module.exports = router;
const express = require('express')
const router = express.Router()
const store = require('../store')

router.get('/',(req,res)=>{
    const {books} = store
    res.status(201)
    res.json(books)
})


module.exports = router;

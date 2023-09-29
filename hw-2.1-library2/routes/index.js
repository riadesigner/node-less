const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(201)
    const goto = 'localhost:3000/api/books';
    res.send(`перейдите на страницу: <a href="http://${goto}">${goto}</a>`)     
})

module.exports = router;

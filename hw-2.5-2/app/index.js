
const express = require("express")
const redis = require("redis")

const app = express()
const PORT = process.env.PORT || 3001
const REDIS_URL = process.env.REDIS_URL

const client = redis.createClient({url: REDIS_URL});

(async ()=>{
    await client.connect();
})()

app.get("/counter/:bookId",async (req,res)=>{       
    const {bookId} = req.params;
    if(bookId){
        let count = await client.get(bookId);
        res.status(200)
        res.send(`всего просмотров книги – ${count}`)
    }else{
        res.status(404)
        res.send("page not found")
    }
})

app.post("/counter/:bookId/incr",async (req,res)=>{       
    const {bookId} = req.params;
    if(bookId){
        let count = await client.incr(bookId);
        res.status(200)
        res.send(`всего просмотров книги – ${count}`)
    }else{
        res.status(404)
        res.send("page not found")
    }
})

app.use((req,res)=>{        
        res.status(404)
        res.send("page not found")
    })

app.listen(PORT,()=>{
    console.log(`hi from ${PORT}`)
})
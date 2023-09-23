
const express = require('express')
const {v4:uuid} = require('uuid')

class Todo{
    constructor(title="", description="", id = uuid()){
        this.title = title
        this.description = description
        this.id = id
    } 
}

const store = {
        todo:[]
    }

const app = express()
app.use(expreёss.json())
app.use(express.urlencoded({ extended: true }))

// x-www-form-urlencoded вместо raw

app.get('/',(req,res)=>{
    res.status(201)
    const goto = 'localhost:3000/api/todo';
    res.send(`перейдите на страницу: <a href="http://${goto}">${goto}</a>`)     
})


app.get('/api/todo',(req,res)=>{
    const {todo} = store
    res.status(201)
    res.json(todo)
})

app.get('/api/todo/:id',(req,res)=>{
    const {todo} = store
    const {id} = req.params
    const idx = todo.findIndex(el=>el.id===id)
    if(idx!==-1){
        res.json(todo[idx])
    }else{
        res.status(404)
        res.json('404 | страница не найдена')
    }
})

app.post('/api/todo/',(req,res)=>{
    const {todo} = store
    const {title, description} = req.body
    const newTodo = new Todo(title, description)
    todo.push(newTodo)
    res.status(201)
    res.json(newTodo)    
})

app.put('/api/todo/:id',(req,res)=>{
    const {todo} = store
    const {id} = req.params
    const {title, description} = req.body
    const idx = todo.findIndex(el=>el.id===id)
    if(idx !== -1){
        const newTodo = new Todo(title,description)
        todo[idx] = {
            ...todo[idx],
            title,
            description
        } 
        res.status(201)
        res.json(newTodo)
    }else{
        res.status(404)
        res.json('404 | страница не найдена')
    }


})

app.delete('/api/todo/:id',(req,res)=>{
    const {todo} = store
    const {id} = req.params
    const idx = todo.findIndex(el=>el.id===id)
    if(idx !== -1){
        todo.splice(idx,1)
        res.status(201)
        res.json('ok')
    }else{
        res.status(404)
        res.json('404 | страница не найдена')        
    }
})


app.listen(3000)
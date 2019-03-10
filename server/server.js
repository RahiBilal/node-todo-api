const express= require('express');
const bodyParser= require('body-parser');

var {mongoose}= require('./db/mongoose');
var {Todo, User}= require('./db/models');

var app= express();
app.use(bodyParser.urlencoded({
    extended:true
    }));
app.use(bodyParser.json());    

//Handle POST /todos request to add new todo
app.post('/todos', (req, res)=> {
    //create new todo
    var todo= new Todo({
        text: req.body.text 
    });

    //saving todo in the mongoDB dataase
    todo.save().then((doc)=> {
        res.status(200).send(doc);
    }).catch(err =>{
        res.status(400).send(err);
    });
});

//Handle GET /todos request to get all todos

app.get('/todos', (req, res)=> {
    Todo.find().then((todos)=> {
        res.status(200).send(todos);
    }).catch((err)=> {
        res.status(400).send(err);
    });
});

app.listen(3000, ()=> {
    console.log('Server started on port 3000');
})
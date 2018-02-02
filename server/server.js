require('./config/config');


const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');                          

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);

    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
            res.status(400).send(e);
    });
});


//GET /todos/12345 part of url
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    //validate ID
    if (!ObjectID.isValid(id)) {
        console.log('ID not valid: ');
        //return res.send(`ID not valid: ${id}`)
        //return res.status(404).send();
        return res.status(404).send(`ID not valid: ${id}`);
    };
    Todo.findById(id).then ((todo) =>{                              //success callback
    if (!todo) {
        //no such ID
        console.log('Id not found');
        return res.status(404).send(`ID not found: ${id}`);
    };
    //ID found
        console.log('ID found, Todo =', todo);
        return res.status(200).send({todo});                        //alternativ to send out object: ${todo} in string
    })
    //error case
.catch((e) => {                                                     //error callback
        console.log(e);
        return res.status(404).send();
    });
});





app.listen(port, () => {
    console.log(`started on port ${port}`)
});


module.exports = {app};
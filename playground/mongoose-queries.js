
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo')

const {User} = require('./../server/models/user')

// var id = '57a7302bd199c0f3a061f2544';
// // var id = '5a7302bd199c0f3a061f2544';

// if (!ObjectID.isValid(id)) {
//   console.log('not valid');
// };


// Todo.find({
//   _id: id
// }).then ((todos) =>{
//   console.log('Todos: ', todos);
// });

// Todo.findOne({
//   _id: id
// }).then ((todo) =>{
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then ((todo) =>{
//   if (!todo) {
//     return console.log('Id not found');
//   };
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


//query users collection , load users mongo model, user.findbyid 3 cases, user not found, user was found, errors accured



var id = '5a7205da1fd1eb30452faf68';

User.findById(id).then ((user) => {
  if (!user) {
    return console.log('Id not found');
  };
  console.log('User found: ', user);
}).catch((e) => {
  console.log('An error occured: \n',e);        //wenn objectid not valid -> error zuvor abfangen
});






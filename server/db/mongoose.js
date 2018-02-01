const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost:27017/TodoApp');

//mongodb://<dbuser>:<dbpassword>@ds121575.mlab.com:21575/todo-app-test

let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://christoph:NmW-C3D-ZMF-6Lm@ds121575.mlab.com:21575/todo-app-test'
};
mongoose.connect( db.localhost || db.mlab);

//mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/TodoApp');


module.exports = {mongoose};

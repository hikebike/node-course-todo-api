
// const {MongoClient, ObjectID} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');           //obj destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to Mongodb server');          //return exits the function and doesn't go to the next statement, alternative is an else clause
    };
    
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');



    // db.collection('Todos').find({
    //     _id: new ObjectID('5a71e5a5effdd1b9fb9b1709')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err) =>  {
    //     console.log('unable tor fetch todo', err)
    // });


    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err) =>  {
    //     console.log('unable tor fetch todo', err)
    // });


    db.collection('Users').find({
        name: 'Christoph'
    }).toArray().then((docs) => {
        //console.log(`Users count: ${count}`);
        console.log(JSON.stringify(docs, undefined,2));
        console.log(docs.length);
    }, (err) =>  {
        console.log('unable tor fetch users', err)
    });


    // client.close();
});



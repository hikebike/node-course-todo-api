
// const {MongoClient, ObjectID} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');           //obj destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to Mongodb server');          //return exits the function and doesn't go to the next statement, alternative is an else clause
    };
    
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');



    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a71e5a5effdd1b9fb9b1709')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then ((result) =>{
    //     console.log(result);
    // })


    db.collection('Users').findOneAndUpdate({
        name: 'Tim'
    },{
        $inc: {
            age: 10
        },
        $set: {
            name: 'Hans'
        }
    },{
        returnOriginal: false
    }).then ((result) =>{
        console.log(result);
    })















    // client.close();
});



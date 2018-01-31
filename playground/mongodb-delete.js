
// const {MongoClient, ObjectID} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');           //obj destructuring


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to Mongodb server');          //return exits the function and doesn't go to the next statement, alternative is an else clause
    };
    
    console.log('connected to MongoDB server');
    const db = client.db('TodoApp');



    // //delete many
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //delete many
    // db.collection('Users').deleteMany({name: 'Christoph'}).then((result) => {
    //     console.log(result);
    // });



    // //delete one
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a71dfb336bb252c7ca27016')
    }).then((result) => {
        console.log(JSON.stringify(result,undefined,2));
    })









    


    // client.close();
});



//const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');

//Connect to mongodb 

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', {useNewUrlParser: true}, (error, client)=> {
    if(error){
        return console.log(error);
    }
    console.log('Connected to mongodb server.');
    const db= client.db('TodoApp');
    db.collection('users').insertOne({
        name: 'Rahi Bilal',
        age: 23,
        location: 'Aligarh'
    }, (error, result)=>{
        if(error){
            return console.log('Unable to insert', error);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });

    client.close();
    
});
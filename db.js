const mongoose =require('mongoose');

//MongoDB connection URL

const mongoURL ='mongodb://127.0.0.1:27017/hotels'

//setup mongoDB connection

mongoose.connect(mongoURL)
 
//get default connection

const db=mongoose.connection;

//event listner setup
db.on('connected', ()=>{
    console.log('connected to mongoDB server');
});

db.on('error', (err)=>{
    console.error('mongoDB connection Error:',err);
});

db.on('disconnected', () =>{
    console.log('mongoDB disconnected');
});

//exporting

module.exports= db; 
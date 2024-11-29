const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body 

//welcome to hotel
app.get('/', function (req, res) {
  res.send('Welcome to hotel')
})

 
//import router file

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

//
//const PORT=process.env.PORT || 3000;

app.listen(process.env.PORT,()=>{
    console.log('listening on port 3000');
})
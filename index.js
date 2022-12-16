//console.log(123);
const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000;

//Launch express
const app = express();

//enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//add routes
app.use('/openai', require('./routes/openaiRoutes'));

//
app.listen(port,() => console.log(`Server started on port ${port}`));


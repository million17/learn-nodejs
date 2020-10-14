require('dotenv').config();
//Require dependencies
const logger = require('morgan');
const express = require('express');

//Create an Express Application
const app = express();

// Configure the app port
const port = process.env.HOST || 9999;

//Start server add
app.listen(port, () => {
    console.log(`Server started : ${port}`);
})

//Load middleware
app.use(logger('dev'));

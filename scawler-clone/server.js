require('dotenv').config();
//Require dependencies
const path = require('path')
const logger = require('morgan');
const express = require('express');

const {sendResponse} = require('./app/helpers');
const {fetchAuthorProfile} = require('./app/scotch')
//Create an Express Application
const app = express();
// app.use('/', express.static(path.resolve(__dirname), '/public'));
app.use(express.static(__dirname + '/public'));

app.get('/:author', (req, res, next) => {
    const auth = req.params.author;
    sendResponse(res)(fetchAuthorProfile(auth));
})
// Configure the app port
const port = process.env.HOST || 9999;

//Start server add
app.listen(port, () => {
    console.log(`Server started : ${port}`);
})

//Load middleware
app.use(logger('dev'));

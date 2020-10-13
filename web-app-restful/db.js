'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME_DATABASE,
    host: 'localhost',
    user: 'root',
    password: 'bemyself',
    database: 'nodejs_api',
    insecureAuth : true
}).connect((err) => {
    if(err) throw err;
    console.log('Connected!')
});


module.exports = db;

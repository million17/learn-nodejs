'use strict';
const db = require('../../db');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM products'
        db.query(sql,(err, response) => {
            console.log(response , err);
            if(err) throw  err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM products WHERE id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if(err) throw err
            res.json(response[0])
        })
    }
}

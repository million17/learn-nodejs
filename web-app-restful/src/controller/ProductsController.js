'use strict';
const db = require('../../db');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM products;'
        db.query(sql,(err, response) => {
            if(err) throw  err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM products WHERE id = ?;'
        db.query(sql, [req.params.productId], (err, response) => {
            if(err) throw err
            res.json(response[0])
        })
    },
    insert: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO products SET ?;'
        db.query(sql, [data], (err, response) => {
            if(err) throw err;
            res.json({message: 'Insert success'})
        });
    },
    update: (req, res) => {
        let data= req.body;
        let id = req.param.productId;
        let sql = 'UPDATE products SET ? where id= ?';
        db.query(sql, [data,id], (err, response) => {
            if(err) throw err;
            res.json({message: 'Update success!'})
        })
    },
    delete: (req,res) => {
        let getId= req.param.productId;
        let sql = 'DELETE FROM products where id=?';
        db.query(sql,[getId], (err, response) => {
            if(err) throw err;
            res.json({message: 'Delete success!'})
        })
    }
}

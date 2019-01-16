"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hipages',
    database: 'hipages'
});
const server = express();
const port = 8080;
var bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
server.get('/leads/:status', (req, res) => {
    connection.query(`SELECT * 
                      from jobs j join suburbs s on s.id = j.suburb_id 
                      join categories c on c.id = j.category_id 
                      where status = ?`, [req.params.status], function (error, results, fields) {
        if (error) {
            throw error;
        }
        res.json(results);
    });
});
server.post('/leads/:id', (req, res) => {
    connection.query(`update jobs set status = ? where id = ?`, [req.body.status, req.params.id], function (error, results, fields) {
        if (error) {
            throw error;
        }
        res.json('success');
    });
});
//# sourceMappingURL=index.js.map
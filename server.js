const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const multer = require('multer');

const upload = multer({dest: './upload'});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port,
    database : conf.database 
});
connection.connect();

app.get('/', (req,res) => {
    res.send('complate');
})

app.get('/load', (req,res)=> {
    connection.query(
        "select * from test",
        (err, rows, fields) =>{
            res.send(rows)
        }
    );
});

app.listen(port, () => {
    console.log(`Server On ${port}`);
})
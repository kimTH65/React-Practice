# React-Practice

<h3>1. 데이터 베이스 정보 설정(MYSQL 사용)</h3>
<div align="center"><h6>database.json</h6></div>

```
{
    "host":"localhost",
    "user":"root",
    "password":"0000",
    "port":"3306",
    "database":"react"
}
```

#

<h3>2. node.js서버 설정</h3>
<div align="center"><h6>retest/server.js</h6></div>

```
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
const { title } = require('process');

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
});

app.get('/load', (req,res)=> {
    connection.query(
        "select * from test",
        (err, rows, fields) =>{
            res.send(rows)
        }
    );
});

...
```

#

<h3>3. node서버와 react서버를 동시에 실행 시켜줄 스크립트 생성</h3>
<div align="center"><h5>retest/package.json</h5></div>

```
{
  "name": "react_test",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "client": "cd client && yarn start",
    "server": "nodemon server.js",
    "dev": "concurrently \"yarn server\" \"yarn client\""
  },
  "dependencies": {
    "body-parser": "^1.20.0",
    "concurrently": "^7.2.1",
    "express": "^4.18.1",
    "multer": "^1.4.5-lts.1",
    "mysql": "^2.18.1",
    "yarn": "^1.22.18"
  }
}
```

#

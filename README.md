# React-Practice

<h3>1. 데이터 베이스 정보 설정(MYSQL 사용)</h3>
<div align="center">
    <h6>
        <a href="database.json">
            Node.js - database.json
        </a>
    </h6>
</div>

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
<div align="center">
    <h6>
        <a href="server.js">
            Node.js - server.js
        </a>
    </h6>
</div>

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

  .
  .
  .

```

#

<h3>3. node서버와 react서버를 동시에 실행 시켜줄 스크립트 생성</h3>
<div align="center">
    <h5>
        <a href="package.json">
            Node.js - package.json
        </a>
    </h5>
</div>

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

<h3>4. Proxy설정</h3>

<h5>　CORS(Cross Origin Resource Sharing)정책 위반 문제해결을 위해 proxy설정</h5>
<div align="center">
    <h6>
        <a href="client/package.json">
            React - package.json
        </a>
    </h6>
</div>

```
  .
  .
  .

  "proxy": "http://localhost:5000/"
}
```

#

<h3>5. React</h3>

<h5>　App.js가 초기 컴포넌트</h5>

<div align="center">
    <h6>
        <a href="client/src/App.js">
            React - App.js
        </a>
    </h6>
</div>

```
import React from 'react';
import './App.css';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import Item from './components/Item'
import List from './components/List'
import Template from './components/Template'
import Form from './components/Form'
class App extends React.Component {
  

  render(){
    return(
      <Template form={<Form/>} list={<List/>}>

      </Template>
    )
  }
}

export default App;
```

<h5>　CRUD관련 컴포넌트</h5>

<div align="center">
    <h6>
        <a href="client/src/components">
            React - components
        </a>
    </h6>
</div>

```
  .
  .
  .

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:''
        }
    }

    componentDidMount() {
        this.callApi().then(res => this.setState({items: res}))
                        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/load');
        const body = await response.json();
        return body;
    }

    render() {

        return(
            
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>title</TableCell>
                        <TableCell>check</TableCell>
                        <TableCell>onRemove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.items ? this.state.items.map(c =>{
                        return(
                            <Item
                                id={c.id}
                                title={c.title}
                                toggle={c.onToggle}
                                remove={c.onRemove}
                            />
                        )
                    }):""}
                </TableBody>
            </Table>
        );
    }
}

export default List
```

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

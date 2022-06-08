import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';


import Item from './Item'

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
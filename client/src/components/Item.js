import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Delete from './Delete';

class Item extends React.Component{
    
    render() {
        const { id, title, onToggle, toggle, remove} = this.props
        return(
            <TableRow className='item' onClick={() => onToggle(id)}>
                <TableCell>{id}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{toggle === 'check' && '✓'}</TableCell>
                <TableCell>{remove === "removed" ? 'Ⅹ' : <Delete id={this.props.id}/>}</TableCell>
            </TableRow>
        );

    }

}

export default Item

import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

class Item extends React.Component{
    
    render() {
        const { id, title, onToggle, onRemove} = this.props
        return(
            <TableRow className='item' onClick={() => onToggle(id)}>
                <TableCell>{id}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{onToggle === 'check' && '✓'}</TableCell>
                <TableCell>{onToggle === 'removed' ? '' : 'Ⅹ'}</TableCell>
            </TableRow>
        );

    }

}

export default Item
import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

class Item extends React.Component{

    render() {
        const { id, title, onToggle, onRemove} = this.props
        return(
            <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{onToggle}</TableCell>
                <TableCell>{onRemove}</TableCell>
            </TableRow>
        );

    }

}

export default Item
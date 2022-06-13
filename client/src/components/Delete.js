import React from 'react';

class Delete extends React.Component {
    deleteItem (id) {
        const url = '/delete/' + id;
        fetch(url, {
            method:'GET'
        })
        window.location.replace("/");
    }
    render(){
        return(
            <button onClick={(e) => {this.deleteItem(this.props.id)}}>삭제</button>
        )
    }
}

export default Delete;
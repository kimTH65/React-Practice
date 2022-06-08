import React from 'react';
import './Form.css'
class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }

    handleCreate = () => {
        this.setState({
            input: ''
        });
    }

    render(){
        return (
            <form action='/insert' method='post'>
                <div className='form'>
                    <input name='title' value={this.input}/>
                    <button type='submit' className='button' onClick={this.handleCreate} >
                        추가
                    </button>
                </div>
            </form>
        )
    }  
}

export default Form
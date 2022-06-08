import React from 'react';
import './Template.css'

const Template = ({form, list}) =>{
    return(
        <main className='main-template'>
            <div className='title'>
                List
            </div>
            <section className='form'>
                {form}
            </section>
            <section className='list'>
                {list}
            </section>

        </main>
    )
}

export default Template
import React from 'react';
import Auxi from './Auxi';
import './Preview.css';

const Preview = (props) => {

    console.log(props)

    return (
        <div className='grid'>
            <div className='head'>NAME</div>
            <div className='head'>PHONE</div>
            <div className='head'></div>

            {props.subs.map((sub, index) => (
                <Auxi key={index} >
                    <div>{sub.name}</div>
                    <div>{sub.number}</div>
                    <div style={{ padding: '0px' }}><button onClick={props.deleteHandler.bind(this, index)} className='main-button red'>DELETE</button></div>
                </Auxi>
            ))}
        </div>
    );
}

export default Preview;
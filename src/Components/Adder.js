import React from 'react';
import './Adder.css';
import './../App.css';

const Adder = (props) => {

    return (
        <div>
            <p>Name: </p>
            <input type='text' placeholder='Enter Name' onChange={props.textChangedHandler} value={props.data.name} name='name'></input>
            <p>Phone: </p>
            <input type='text' placeholder='9876543210' onChange={props.textChangedHandler} value={props.data.number} name='phone'></input>
            
            <h5>Subscriber to be added</h5>
            <p>Name: {props.data.name}</p>
            <p>Phone: {props.data.number}</p>
            <button onClick={props.click} className='main-button green'>ADD</button>
        </div>

    )
};

export default Adder;
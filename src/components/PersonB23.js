import React from 'react'

const PersonB23 = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <input type="text" onChange={props.changed}></input>
        </div>
    );
}

export default PersonB23;

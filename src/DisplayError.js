import './errorDisplay.css'
import React from 'react';

const DisplayError=(props)=>{
    console.log(props);
    return (
        <div className="errorDisplay">
            <div className="errMsg">{props.children}</div>
        </div>
    )
}

export default DisplayError;
import React from 'react'

const Loader=(props)=>{
    console.log(props.message);
    return (
    
                <div className="ui active dimmer">
                 <div className="ui text loader">{props.message}</div>
                </div>
    )
};

export default Loader;
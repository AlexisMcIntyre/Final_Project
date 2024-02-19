import React from 'react';

export const TextBox = (props) => {
    // const {text, setText} = props; //house is all data passed in for house, updateHouse is the method being passed in (called from child class component)
    
    return (
            <div className="textbox">    
                <p>{props.loc}</p>
                <p>{props.desc}</p>
            </div>
    )
};
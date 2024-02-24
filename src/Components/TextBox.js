import React from 'react';

//This simple components accepts props from it's parent component in the form of text.

export const TextBox = (props) => {
    
    return (
            <div className="textbox">    
                <h3>{props.title}</h3>
                {props.text}
            </div>
    )
};
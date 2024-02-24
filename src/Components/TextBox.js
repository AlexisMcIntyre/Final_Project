import React from 'react';

export const TextBox = (props) => {
    
    return (
            <div className="textbox">    
                <h3>{props.title}</h3>
                {props.text}
            </div>
    )
};
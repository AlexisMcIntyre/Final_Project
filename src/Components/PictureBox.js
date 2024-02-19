import React from 'react';

export const PictureBox = (props) => {
    // const {picture, setPicture} = props; //house is all data passed in for house, updateHouse is the method being passed in (called from child class component)
    
    return (
            <div className="picturebox">    
                <img src={props.num} alt="picture" />
            </div>
    )
};
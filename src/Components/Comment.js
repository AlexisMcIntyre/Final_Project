import React from 'react';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';

export const Comment = (props) => {
    const {comment, updateComments} = props; //house is all data passed in for house, updateHouse is the method being passed in (called from child class component)
 

    return (
            <div className="comment">    
                <p>{comment.username}***{comment.createdAt}</p>
                <p>{comment.comment}</p>
                <LikeButton /><DislikeButton />
            </div>
    )
};
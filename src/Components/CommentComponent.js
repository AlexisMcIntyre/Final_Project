import React from 'react';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';

export const CommentComponent = (props) => {
    const {comment, deleteComment} = props; //house is all data passed in for house, updateHouse is the method being passed in (called from child class component)
    
    return (
            <div className="comment">    
                <p>{comment.comment}</p>
                <button onClick={(e) => deleteComment(props.index)}>Delete</button>
                <LikeButton /><DislikeButton />
            </div>
    )
};
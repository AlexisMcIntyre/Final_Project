import React from 'react';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';

//Props is used here to receive props from the CommentForm. The comment text is displayed and a button to deleteComment which is a method recieved via props. The comment is deleted based on its index when the user clicks the button.

export const CommentComponent = (props) => {
    const {comment, deleteComment} = props;
    
    return (
            <div className="comment">    
                <p>{comment.comment}</p>
                <button onClick={(e) => deleteComment(props.index)}>Delete</button>
                <LikeButton /><DislikeButton />
            </div>
    )
};
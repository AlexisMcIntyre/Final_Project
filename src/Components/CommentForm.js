import React, {useState} from "react";



export const CommentForm = (props) => {
    const [comment, setComment] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (comment) {
            props.addNewComment({comment});
            setComment('');
        }
        else {
            console.log("invalid input");
        }
    };

        return (
            <>
                <h5>Leave a comment?</h5>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Comment" onChange={(e) => setComment(e.target.value)} value={comment} />
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
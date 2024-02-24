import React, {useState} from "react";

//This form sends props to the Comment component. When the input in the form is changes (i.e. user types), setComment is used on that input value, making it the comment. The form in the return runs onSubmit when the submit button is clicked. The onSubmit function uses the addNewComment method that is passed in via props. The form is then reset to be blank for a good user exprience.

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
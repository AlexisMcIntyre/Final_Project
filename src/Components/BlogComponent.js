import React from 'react';
import {CommentComponent} from './CommentComponent';
import {CommentForm} from './CommentForm';

export const BlogComponent = (props) => {
    const {blog, updateBlog} = props;

    const addNewComment = (comment) => {
        console.log(comment)
        return updateBlog ({...blog, comments: [...blog.comments, comment]})
    };

    const deleteComment = (commentId) => {
        const updatedBlog = { 
            ...blog, 
            comments: blog.comments.filter((_,i) => i !== commentId)
        };
        updateBlog(updatedBlog); //doing to pass updated house into the update house method that was passed down (will call the put method on the houses API, thus it will call the HTTP request to update)
    }

    return (
        <div className="blogpost">
            <h1>{blog.name}</h1>
            <h4>{blog.blog}</h4>
            <CommentForm addNewComment={addNewComment} />
            {blog.comments.map((comment, index) => (
                <li key={index}>
                <CommentComponent index={index}comment={comment} deleteComment={deleteComment}/>
                </li>
            ))
        }
        </div>
    );
};
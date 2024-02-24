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
        updateBlog(updatedBlog);
    }

    return (
        <div className="blogpost">
            <h2>{blog.name}</h2>
            <p>{blog.blog}</p>
            <CommentForm addNewComment={addNewComment} />
            {blog.comments.map((comment, index) => (
                <ul key={index}>
                <CommentComponent index={index}comment={comment} deleteComment={deleteComment}/>
                </ul>
            ))
        }
        </div>
    );
};
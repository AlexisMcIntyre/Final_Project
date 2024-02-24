import React from 'react';
import {CommentComponent} from './CommentComponent';
import {CommentForm} from './CommentForm';


//The BlogComponent recieves props from the BlogsPage, blog and updateBlog. Props also exports the addNewComment and deleteComment to other components such as the CommentComponent. addNewComment spreads the blog and adds the comments to it by pulling the input from the CommentForm component. deleteComment spreads the blog, filters comments by Id and removes the comment with the matching id. The upateBlog function (from the BlogPage) is used at the end of both addNewComment and deleteComment to refresh the blog list with the new data using the API (on BlogPage).

//The return uses the CommentForm and CommentComponent and passes props to both. The existing comments are displayed using map.

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
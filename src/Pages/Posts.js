import React from "react";
import { Blog } from "../Components/Blog";
import Comment from "../Components/Comment";
import { travelApi } from "../TravelApi";

export default class Posts extends React.Component {
    state = {
        blogs: []

    };
   
    componentDidMount() {
        this.fetchBlogs();
    };
    
    fetchBlogs = async () => {
        const blogs = await travelApi.get();
        this.setState({ blogs });
    };
   
    render () {
        return (
            <>
                <h1 className="pageHeader">Posts</h1>
                {
                    this.state.blogs.map((blog) => (
                        <Blog blog={blog}/>
                    ))
                }
            </>
        );
    }
}
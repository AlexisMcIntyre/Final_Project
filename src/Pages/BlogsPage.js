import React from "react";
import { BlogComponent } from "../Components/BlogComponent";
import { travelApi } from "../TravelApi";

export default class BlogsPage extends React.Component {
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

    updateBlog = async (updatedBlog) => {
        console.log(updatedBlog)
        await travelApi.put(updatedBlog);
        this.fetchBlogs();
    };
   
    render () {
        return (
            <>
                <h1 className="pageHeader">Blogs</h1>
                {
                    this.state.blogs.map((blog) => (                       
                            <BlogComponent key={blog.id} blog={blog} updateBlog={this.updateBlog} />                       
                    ))
                }
            </>
        );
    }
}
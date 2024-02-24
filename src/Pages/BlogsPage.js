import React from "react";
import { BlogComponent } from "../Components/BlogComponent";
import { travelApi } from "../TravelApi";

//In this page, blog posts are displayed using fetchBlogs, which asynchronously gets blogs from the API, then stes them to the state. In the return, they are diplayed individually by mapping out the blogs in the state. The blogComponent recieves props from this component such as blog and updateblog. The updateBlog sends a put request to the API with the updatedBlog (from the BlogComponent) to be added to the info stored in the API.

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
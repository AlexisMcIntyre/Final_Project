import React from "react";
import { Blog } from "./Blog";
import { travelApi } from "../TravelApi";

export default class BlogList extends React.Component {
    state = {
        blogs: []

    };

    componentDidMount() {
        console.log("test");
        this.fetchBlogs();
    };

    fetchBlogs = async () => {
        console.log("test");
        const blogs = await travelApi.get();
        
        this.setState({ blogs });
    };

    updateBlog = async (updatedBlog) => {
        await travelApi.put(updatedBlog);
        this.fetchBlogs();
    };

    render () {
        return (
            <div className="blog-list">
                {this.state.blogs.map((blog) => (
                    <Blog  //house props
                        blog={blogs} //all the data from this itteration of house
                       // key={blog.id}
                       // updateBlog={this.updateBlog} //method called from child
                        />
                ))}
            </div>
        )
    }

}
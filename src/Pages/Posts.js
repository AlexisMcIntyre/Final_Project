import BlogPost from "../Components/BlogPost";
import Comment from "../Components/Comment";

export default function Posts() {

    let commentOne = {
        username: "Renato",
        date: "12-1-2020",
        content: "I'm a Brasilian",
    };

    return (
        <>
            <h1 className="pageHeader">Posts</h1>
            <BlogPost />
            <BlogPost />
            <BlogPost />
        </>
    );
}
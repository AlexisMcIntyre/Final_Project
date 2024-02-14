import React from 'react';
import TextBox from './TextBox';
import Comment from './Comment';
import PhotoBox from './PhotoBox';
import LikeButton from './LikeButton';g
import DislikeButton from './DislikeButton';


export default function BlogPost() {

    let blogPostOne = {
        title: "Brazil",
        date: "6-1-2023",
        content: "I went to Brazil for the first time",
    };

    let blogPostTwo = {
        title: "Guatemala",
        date: "3-1-2023",
        content: "I went to Guatemala for the first time",
    };

    let blogPostThree = {
        title: "Japan",
        date: "11-9-2008",
        content: "I went to Japan for the second time",
    };

    let commentOne = {
        username: "Renato",
        date: "12-1-2020",
        content: "I'm a Brasilian",
    };

    let commentTwo = {
        username: "Mrs.ChiChi",
        date: "12-31-2020",
        content: "Wow how kool",
    };

    let commentThree = {
        username: "DumbAZZ",
        date: "9-31-2020",
        content: "No 1 carez",
    };

        return (
            <div className="blogpost">
                <PhotoBox />
                <TextBox {...blogPostOne}/>
                <LikeButton />
                <DislikeButton />
                <p>Comments</p>
                <Comment {...commentOne}/>
                <Comment {...commentTwo}/>
                <Comment {...commentThree}/>
            </div>
        );
    }
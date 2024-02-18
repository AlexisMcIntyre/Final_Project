import React from 'react';
import TextBox from './TextBox';
import {Comment} from './Comment';
import PhotoBox from './PhotoBox';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';
import BlogList from './BlogList';
import { travelApi } from '../TravelApi';

export const Blog = (props) => {
    const {blog, updateBlog} = props; //house is all data passed in for house, updateHouse is the method being passed in (called from child class component)

    const deleteName = (nameId) => {  //going to filter out room for deletion by matching the id & removing room fom array (using filter method)
        const updatedBlog = { //assigning a new variable the value of the new object
            ...blog, //spread the house that is passed in, which will use all the data from the house object EXCEPT the data we are changing below --the rooms
            names: blog.names.filter((x) => x.id !== nameId)  //rooms will be updated to a different value (which is basically the same value MINUS the id of the room being deleted)
    };
    updateBlog(updatedBlog); //doing to pass updated house into the update house method that was passed down (will call the put method on the houses API, thus it will call the HTTP request to update)
}

const addNewName = (name) => {
   return updateBlog ({...blog, names: [...blog.names, name]}) //when updating props or state you should add a new object or array value, you don't modify an existing one, so here we are using the old array (using spread) and adding a new value to it to create a new array
};

// this could also be written like this because it is one line and will automatically be returned: const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});

const names = () => (  //rooms (the collection of rooms) will create an instance of each room as an li
    <ul>        
        <li key={index}>
            <label> {`First: $(name.first} Last: ${name.last}`}</label>
            <button onClick={(e) => deleteName(name.id)}>Delete</button>
            </li>        
    </ul>
);

        return (
            <div className="blogpost">
                <h1>{blog.name}</h1>
                <h4>{blog.blog}</h4>
                <button onClick={(e) => deleteName(name.id)}>Delete</button>
               {blog.comments.map((comment) => (
                   <Comment comment={comment}/>
                ))
            }
            </div>
        );
};
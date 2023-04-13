import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {addNewPost} from '../api';


const AddNewPost = (props) => {


 const fakePost= {
    "location": "fairfax",
    "willDeliver": false,
    "messages": [],
    "active": true,
    "_id": "642762a8cd3bfb001620064e",
    "author": {
      "_id": "642762a8cd3bfb0016200648",
      "username": "KodaOwner"
    },
    "cohort": "642762a8cd3bfb0016200646",
    "title": "Puppy for adoption",
    "description": "very cute puppy fnding new home",
    "price": "free",
    "createdAt": "2023-03-31T22:46:00.837Z",
    "updatedAt": "2023-03-31T22:46:00.880Z",
    "__v": 0,
    "isAuthor": true
  }

const  {postsList , setPostsList , isLoggedIn , currentUser,token} = props;
const [willDeliver, setWillDeliver] = useState(false);
const [title, setTitle] =useState('');
const [description,setDescription] =useState('');
const [price, setPrice] =useState('');
const [location, setLocation] =useState('[On Request]');
console.log("I am entering create new post");
const navigate = useNavigate();

const handleChange = () => {
    setWillDeliver(!willDeliver);
  };

  const  handleSubmit = async(event) => {
    event.preventDefault();

    const postToAdd = {post: 
      {
        title: title,
        description: description,
        price: price,
        location: location,
        willDeliver: willDeliver
      } 
      };
    const newPost = await addNewPost(postToAdd, token);
    console.log("new post created : ",newPost)
    //temp solution
    // setPostsList([...postsList,fakePost]);

    //real solution should be
    // setPostsList([...postsList,newPost]);
   // navigate('/AllPosts');
  }
    return (
        <>
        <h2> Add New Post</h2>
        <form onSubmit={handleSubmit} id='add-post-form'>
            <label htmlFor=" title">Title</label>
            <input type ="text" name ="title" value ={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" required/>
            <input type ="text" name ="description" value ={description} onChange={(event) => setDescription(event.target.value)}placeholder="Description" required/>
            <input type ="text" name ="price" value ={price} onChange={(event) => setPrice(event.target.value)} placeholder = "Price" required/>
            <input type ="text" name ="location" value ={location} onChange={(event) => setLocation(event.target.value)}placeholder="Enter a location"/>  
            <input type="checkbox" 
                   name ="willdeliver" 
                   checked={willDeliver} 
                   onChange={handleChange}/> 
            <label>  Will Deliver </label>
            <button type ="submit">CREATE</button>
        </form>
        </>
    );

}
export default AddNewPost;
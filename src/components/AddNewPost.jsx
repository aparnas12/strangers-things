import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {addNewPost,getAllPosts} from '../api';


const AddNewPost = (props) => {


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
    setPostsList([...postsList,newPost]);
    let allPosts = await getAllPosts();
    setPostsList(allPosts);
     navigate('/AllPosts');
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
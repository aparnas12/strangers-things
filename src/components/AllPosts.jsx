import SearchBar from "./SearchBar";
import React from "react";
import SinglePostView from "./SinglePostView";
import { useState } from "react";
import AddNewPost from "./AddNewPost";
import { NavLink, useNavigate } from "react-router-dom";

const AllPosts = (props) => {
    const {postsList, setPostsList,isLoggedIn,currentUser,token,selectedPost,setSelectedPost} = props;
    const [returnedPostList, setReturnedPostList] = useState([]);
    const navigate = useNavigate();

    const handleClick = (logged) =>
    {
       // console.log("entering handle click for create post" , isLoggedIn);
        if(logged)
        {
            navigate('/AddNewPost');
        }
        else{
            window.alert('Please sign in to add a post!');
        }
    }
   
    return (
        <>  <h2> Posts</h2>
            <button
            onClick={() => {handleClick(isLoggedIn)}}
            > Add New Post</button>
            <SearchBar postsList = {postsList} setReturnedPostList = {setReturnedPostList} />
           
            {
                returnedPostList.length  ?
                <div id='all-posts-container'>
                {returnedPostList.map((post,index) => {
                    return (
                    <div key={index}>
                        <SinglePostView  post = {post} isLoggedIn = {isLoggedIn} currentUser ={currentUser} setSelectedPost ={setSelectedPost}/>
                    </div>
                    );
                    })}
                </div>
                : 
                <div id='all-posts-container'>
                {postsList.map((post,index) => {
                return (
                <div key={index}>
                    <SinglePostView  post = {post} isLoggedIn ={isLoggedIn} currentUser ={currentUser} setSelectedPost ={setSelectedPost}/>
                </div>
                );
                })}
            </div>
            }

        </>
    );
}

export default AllPosts;


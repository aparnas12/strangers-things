import SearchBar from "./SearchBar";
import React from "react";
import SinglePostView from "./SinglePostView";
import { useState } from "react";

const AllPosts = (props) => {
    const {postsList, setPostsList,isLoggedIn,currentUser} = props;
    const [returnedPostList, setReturnedPostList] = useState([]);

    console.log(returnedPostList);
    return (
        <>  <h2> Posts</h2>
            <SearchBar postsList ={postsList} setReturnedPostList = {setReturnedPostList} />
            {
                returnedPostList.length  ?
                <div id='all-posts-container'>
                {returnedPostList.map((post,index) => {
                    return (
                    <div key={index}>
                        <SinglePostView  post = {post} isLoggedIn = {isLoggedIn} currentUser ={currentUser}/>
                    </div>
                    );
                    })}
                </div>
                : 
                <div id='all-posts-container'>
                {postsList.map((post,index) => {
                return (
                <div key={index}>
                    <SinglePostView  post = {post} isLoggedIn ={isLoggedIn} currentUser ={currentUser}/>
                </div>
                );
                })}
            </div>
            }

        </>
    );
}

export default AllPosts;
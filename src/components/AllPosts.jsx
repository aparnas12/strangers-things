import SearchBar from "./SearchBar";
import React from "react";
import SinglePostView from "./SinglePostView";
import { useState } from "react";

const AllPosts = (props) => {
    const {postsList, setPostsList} = props;
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
                    <>
                        <SinglePostView key={index} post = {post} />
                    </>
                    );
                    })}
                </div>
                : 
                <div id='all-posts-container'>
                {postsList.map((post,index) => {
                return (
                <>
                    <SinglePostView key={index} post = {post} />
                </>
                );
                })}
            </div>
            }

        </>
    );
}

export default AllPosts;
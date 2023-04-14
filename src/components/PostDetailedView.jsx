import React from 'react';
import { useNavigate } from "react-router-dom";
import {deletePost, getAllPosts} from '../api';

const PostDetailedView = (props) => {

    const {isLoggedIn,currentUser, selectedPost, setSelectedPost,setPostsList,token,postsList} = props;
    console.log("islogged in", isLoggedIn);
    

    const navigate = useNavigate();
    const checkAuthor = (currUser, author) => 
    {

        return (currUser === author );
    }

    return(
        <>
        <div id = 'single-post-container'>
         <h3>{selectedPost.title}</h3>
         <p>{selectedPost.description}</p>
         <p><b>Price :</b>{selectedPost.price}</p>
         <p><strong>Seller : {selectedPost.author.username} </strong></p>
         <p>Location : {selectedPost.location}</p> 
        
          {isLoggedIn ?
            checkAuthor(currentUser, selectedPost.author.username) ? //exposing the delete button only if the user is logged in and is the author of the post aka current user in the state is the same as the author of the post
              <button
                onClick={async () => {

                  await deletePost(selectedPost._id, token);
                  setPostsList([...postsList.filter((post) => post._id !== selectedPost._id)]);
                  let allPosts = await getAllPosts();
                  setPostsList(allPosts);
                  
                  navigate('/AllPosts');
                }}
                className="delete-button"> Delete Post</button>
              : <button
                onClick={() => { navigate('/SendMessageView') }}>Send Message</button> //exposing the send message if the post being viewed is created by another author than current logged in user.
            : <><br></br></>
          }
        </div>
         
        </>
    );
}

export default PostDetailedView;



   

        
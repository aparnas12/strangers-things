import React from "react";
import PostDetailedView from "./SinglePostView";
import { useNavigate } from "react-router-dom";


const MessageTo = (props) => {
  const {message, postId, currentUser} = props
 
  

   
    return (
   <>
   {
        currentUser !== message.fromUser.username ?
        <>
        <div className="user-post-preview">
        <h2>From: {message.fromUser.username} </h2>
        <h2>Post Title : {postId.title}</h2>
            <h2> Message: {message.content} </h2>
        </div>
          </>
          :
          <>
          </>
      }
   </>

    );
  }
  

export default MessageTo;
import React from "react";
import PostDetailedView from "./SinglePostView";
import { useNavigate } from "react-router-dom";


const MessageTo = (props) => {
  const {message, post, currentUser} = props
 
  

   
    return (
    <div className="user-post-preview">
      {
        currentUser !== message.fromUser.username ?
        <>
        <h2>From: {message.fromUser.username} </h2>
          <div>
            <h2> {message.content} </h2>
            {/* <p>{ post.description }</p> */}
          </div>
          </>
          :
          <>
          
          </>
      }
      </div>
    );
  }
  
//comment

export default MessageTo;
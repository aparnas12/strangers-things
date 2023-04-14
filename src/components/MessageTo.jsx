import React from "react";
import PostDetailedView from "./SinglePostView";
import { useNavigate } from "react-router-dom";


const MessageTo = (props) => {
  const {post} = props
 
  
  const navigate = useNavigate();
  function handleClick(){
    navigate('/PostDetailedView');
  }

    return (
      
      <div className="user-post-preview">
        <h2>From: {post.author.username} </h2>
          <div>
            <h2> {post.title} </h2>
            <p>{ post.description }</p>
            <button onClick={handleClick}>View My Post</button>
          </div>
          
        
      </div>
    );
  }
  
//comment

export default MessageTo;
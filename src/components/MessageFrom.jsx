import React from "react";
import { useNavigate } from "react-router-dom";


const MessageFrom = (props) => {
  const {message, currentUser, postId, userPosts, setSelectedPost} = props

  const navigate = useNavigate();
  function handleClick(){
     
    setSelectedPost(postId);
    navigate('/SendMessageView');
  }
    return (
     <>
         {currentUser === message.fromUser.username ?
         <>
        <div className="user-post-preview">
            <h2> Sent By Me </h2>
            <h3>Post Title : {postId.title} </h3>
            <p>{ message.content }</p>
            <button onClick={handleClick}>Send Message</button>
        </div>
        </>
        :
        <></>
        }
      </>
    );
  }
  
 
export default MessageFrom;
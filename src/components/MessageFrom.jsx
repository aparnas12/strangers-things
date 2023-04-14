import React from "react";
import { useNavigate } from "react-router-dom";


const MessageFrom = (props) => {
  const {message, currentUser, postId, userPosts, setSelectedPost} = props
  console.log(postId, "Im in Message From!")
  
  const navigate = useNavigate();
  function handleClick(){
     
    setSelectedPost(postId);
    navigate('/SendMessageView');
  }
    return (
      <div className="user-post-preview">
         {currentUser === message.fromUser.username ?
         <>
        <h2> Sent By Me </h2>
          <div>
            <h3>Post Title : {postId.title} </h3>
            <p>{ message.content }</p>
            <button onClick={handleClick}>Send Message</button>
          </div>
        </>
        :
        <></>
        }
      </div>
    );
  }
  
   
 


export default MessageFrom;
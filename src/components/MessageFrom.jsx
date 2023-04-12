import React from "react";
import { useNavigate } from "react-router-dom";


const MessageFrom = (props) => {
  const {post} = props
  // const title = props.title
  // const description = props.description
  const navigate = useNavigate();
  function handleClick(){
    navigate('/SendMessageView');
  }
    return (
      <div className="user-post-preview">
        <h2> Sent By Me </h2>
          <div>
            <h2> {post.title} </h2>
            <p>{ post.description }</p>
            <button onClick={handleClick}>Send Message</button>
          </div>
        
      </div>
    );
  }
  
//comment

export default MessageFrom;
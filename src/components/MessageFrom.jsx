import React from "react";


const MessageFrom = (props) => {
  const {post} = props
  // const title = props.title
  // const description = props.description
    return (
      <div className="user-post-preview">
        <h2> Sent By Me </h2>
          <div>
            <h2> {post.title} </h2>
            <p>{ post.description }</p>
            <button>Message Again</button>
          </div>
        
      </div>
    );
  }
  
//comment

export default MessageFrom;
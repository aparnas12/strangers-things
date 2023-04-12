import React from "react";


const MessageTo = (props) => {
  const {post} = props
  // const title = props.title
  // const description = props.description
    return (
      <div className="user-post-preview">
        <h2>From: {post.author.username} </h2>
          <div>
            <h2> {post.title} </h2>
            <p>{ post.description }</p>
            <button>View My Post</button>
          </div>
        
      </div>
    );
  }
  
//comment

export default MessageTo;
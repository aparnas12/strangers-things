import React from "react";


const MessagePreview = ({
  currentUser,
  postsList
}) => {
  
    return (
      <div className="user-post-preview">
        <h2>From:  </h2>
        {postsList.map(({ title, description}) => (
          <div>
            <h2>{ title }</h2>
            <p>{ description }</p>
            <button>View Post</button>
          </div>
          ))}
        
      </div>
    );
  }
  


export default MessagePreview;
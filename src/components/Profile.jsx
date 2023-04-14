import React from "react"
import MessageTo from "./MessageTo";
import MessageFrom from "./MessageFrom";
const Profile = (props) => {
    const {postsList, setPostsList, userMessages, setUserMessages, userPosts, setUserPosts, currentUser, selectedPost, isLoggedIn, setSelectedPost} = props;

    
    return(
        <>
        { isLoggedIn ?
        <div className="messages"><h1>Messages To Me</h1>
         {userMessages.map((message, index) => {
                return (
                <div className="message-box" key={index}>
                    <MessageTo currentUser = {currentUser} userPosts = {userPosts} message = {message} />
                </div>
         );
        
        })} 
        <div className="messages"><h1>Messages From Me</h1>
              {userMessages.map((message, index) => {
    
                     return (
                     <div className="message-box" key={index}>
                         <MessageFrom selectedPost = {selectedPost} setSelectedPost = {setSelectedPost} currentUser = {currentUser} userPosts = {userPosts} message = {message} postId = {message.post}  />
                     </div>
              );
             })}
             </div> 
        </div>
        
            :
            <>
            <h2>Please Log In!</h2></>
            };
        </>
    );
}

export default Profile;


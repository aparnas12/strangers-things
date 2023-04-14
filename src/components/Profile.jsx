import React from "react"
import MessageTo from "./MessageTo";
import MessageFrom from "./MessageFrom";
const Profile = (props) => {
    const {postsList, setPostsList, userMessages, setUserMessages, userPosts, setUserPosts, currentUser, isLoggedIn} = props;
    return(
        <>
        { isLoggedIn ?
        <div><h1>Messages To Me</h1>
         {userMessages.map((message, index) => {
                return (
                <div key={index}>
                    <MessageTo currentUser = {currentUser} userPosts = {userPosts} message = {message} />
                </div>
         );
        })}
        </div>
        
            :
            <>
            <h2>Please Log In!</h2></>
            };
        </>
    );
}

export default Profile;

{/* <div><h1>Messages From Me</h1>
              {userMessages.map((message, index) => {
               
                     return (
                     <div key={index}>
                         <MessageFrom  message = {message} />
                     </div>
              );
             })}
             </div> */}
import React from "react"
import MessageTo from "./MessageTo";
import MessageFrom from "./MessageFrom";
const Profile = (props) => {
    const {postsList, setPostsList, userMessages, setUserMessages} = props;
    return(
        <>
        <div><h1>Messages To Me</h1>
         {userMessages.map((message, index) => {
                return (
                <div key={index}>
                    <MessageTo  message = {message} />
                </div>
         );
        })}
        </div>
        <div><h1>Messages From Me</h1>
              {userMessages.map((message, index) => {
               
                     return (
                     <div key={index}>
                         <MessageFrom  message = {message} />
                     </div>
              );
             })}
             </div>
        </>
    );
}

export default Profile;
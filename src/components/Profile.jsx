import React from "react"
import MessageTo from "./MessageTo";
import MessageFrom from "./MessageFrom";
const Profile = (props) => {
    const {postsList, setPostsList, User} = props;
    return(
        <>
        <div><h1>Messages To Me</h1>
         {postsList.map((post,messages) => {
                return (
                <div key={messages}>
                    <MessageTo  post = {post} />
                </div>
         );
        })}
        </div>
        <div><h1>Messages From Me</h1>
              {postsList.map((post,messages) => {
                if(isAuthor)
                     return (
                     <div key={messages}>
                         <MessageFrom  post = {post} />
                     </div>
              );
             })}
             </div>
        </>
    );
}

export default Profile;
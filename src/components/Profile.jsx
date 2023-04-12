import React from "react"
import MessageTo from "./MessageTo";
import MessageFrom from "./MessageFrom";
const Profile = (props) => {
    const {postsList, setPostsList} = props;
    return(
        <>
        <div><h1>Messages To Me</h1>
         {postsList.map((post,index) => {
                return (
                <div key={index}>
                    <MessageTo  post = {post} />
                </div>
         );
        })}
        </div>
        <div><h1>Messages From Me</h1>
              {postsList.map((post,index) => {
                     return (
                     <div key={index}>
                         <MessageFrom  post = {post} />
                     </div>
              );
             })}
             </div>
        </>
    );
}

export default Profile;
import React from "react"
import MessagePreview from "./MessagePreview";

const Profile = (props) => {
    const {postsList, setPostsList} = props;
    return(
        <><h1>Welcome</h1>
         {postsList.map((post,index) => {
                return (
                <>
                    <MessagePreview key={index} post = {post} />
                </>
         );
        })}
        </>
    );
}

export default Profile;
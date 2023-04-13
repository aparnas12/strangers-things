import React from "react";

const SendMessageView = (props) => {

    const {isLoggedIn,currentUser, selectedPost, setSelectedPost} = props;
    return(
        <>
        <div id = 'single-post-container'>
        <h3>{selectedPost.title}</h3>
         <p>{selectedPost.description}</p>
         <p><b>Price :</b>{selectedPost.price}</p>
         <p><strong>Seller : {selectedPost.author.username} </strong></p>
         <p>Location : {selectedPost.location}</p> 
         <input placeholder="Message Text Here"></input>
         <span><button>Send Message</button></span>
        </div>
         
        </>
    );
}

export default SendMessageView;
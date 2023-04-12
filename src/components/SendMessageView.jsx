import React from "react";

const SendMessageView = (props) => {

    const {post} = props;
    return(
        <>
        <div id = 'single-post-container'>
         <h3>{post.title}</h3>
         <p>It works very well</p>
         <p><b>Price</b> : $</p>
         <p><strong>Seller : </strong></p>
         <p>Location :</p> 
         <input placeholder="Message Text Here"></input>
         <span><button>Send Message</button></span>
        </div>
         
        </>
    );
}

export default SendMessageView;
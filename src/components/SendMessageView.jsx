import React from "react"
import {useState} from "react"
import { postMessage } from "../api";

const SendMessageView = (props) => {

    
    const {isLoggedIn,currentUser, selectedPost, userMessages, userPosts, getMe, token} = props;
    const [message, setMessage] = useState('')
    const  handleSubmit = async(event) => {
        event.preventDefault();
    
        const messageToSend = {message: 
          {
            content: message,
            
          } 
          };
        const sentMessage = await postMessage (messageToSend, token);
        console.log("Message Sent : ",sentMessage)
       
        setUserMessages([...UserMessages,sentMessage]);}
    return(
        <>
        <div id = 'single-post-container'>
        <h3>Title: {selectedPost.title}</h3>
         <p>Description: {selectedPost.description}</p>
         <p><b>Price :</b>{selectedPost.price}</p>
         <p><strong>Seller : {selectedPost.author} </strong></p>
         <p>Location : {selectedPost.location}</p> 
         <input type="text" name="message" value={message} onChange={(event) => setLocation(event.target.value)} placeholder="Message Text Here"></input>
         <span><button>Send Message</button></span>
        </div>
         
        </>
    );
}

export default SendMessageView;
import React from "react"
import {useState} from "react"
import { postMessage, getMe } from "../api";
import { useNavigate } from "react-router-dom";

const SendMessageView = (props) => {

    
    const {isLoggedIn,currentUser, selectedPost, userMessages, userPosts, token, setUserMessages} = props;
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const  handleClick = async(event) => {
        event.preventDefault();
    
        const messageToSend = {message: 
          {
            content: message,
            
          } 
          };
        const sentMessage = await postMessage (messageToSend, token, selectedPost._id);
       
        setUserMessages([...userMessages,sentMessage]);
        const fetchedUser = await getMe(token);
        setUserMessages(fetchedUser.data.messages);
       
        navigate('/Profile');
    }
        
    return(
        <>
        <div id = 'single-post-container'>
        <h3>Title: {selectedPost.title}</h3>
         <p><strong>Seller : {selectedPost.author.username} </strong></p>
         <input type="text" name="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Message Text Here"></input>
         <span><button onClick={handleClick}>Send Message</button></span>
        </div>
         
        </>
    );
}

export default SendMessageView;
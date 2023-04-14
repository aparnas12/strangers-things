import { useNavigate } from "react-router-dom";
import React from 'react';


const SinglePostView = (props) => {

    const {isLoggedIn,currentUser, post,setSelectedPost} = props;
    console.log("current poet in single view is :",post);
    const navigate = useNavigate();
    const checkAuthor = (currUser, author) => 
    {
    
        return (currUser === author );
    }

    return(
        <>
        <div id = 'single-post-container'>
         <h3>{post.title}</h3>
         <p>{post.description}</p>
         <p><b>Price :</b>{post.price}</p>
         <p><strong>Seller : {post.author.username} </strong></p>
         <p>Location : {post.location}</p> 
    
          {isLoggedIn ? //this section is only available to authenticated users
          checkAuthor(currentUser, post.author.username) 
          ? <button
          onClick = {()=>{
            setSelectedPost(post);
            console.log("I am setting the selected post to :",post.title );
            navigate('/PostDetailedView')
          }}
          >View Post</button> //exposing the view post and not send message if the post is authored by logged in user aka current user in the state
          : 
          <button
          onClick ={() => { setSelectedPost(post); navigate('/SendMessageView')}}
          >View Post or Send Message</button> //the send message is exposedi if post is authored by someone else. Allows logged in user to send a message to seller or just view the post again
          : <><br></br></>
          }
        </div>
         
        </>
    );
}

export default SinglePostView;


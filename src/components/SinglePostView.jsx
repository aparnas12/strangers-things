import { useNavigate } from "react-router-dom";
import React from 'react';


const SinglePostView = (props) => {

    const {isLoggedIn,currentUser, post,setSelectedPost} = props;
    const navigate = useNavigate();
// const checkAuthor = (currUser, author) => 
// {
//    console.log('currentuser is:', currentUser);
//    console.log('current author is : ',author);
//     return (currUser === author );
// }

    return(
        <>
        <div id = 'single-post-container'>
         <h3>{post.title}</h3>
         <p>{post.description}</p>
         <p><b>Price :</b>{post.price}</p>
         <p><strong>Seller : {post.author.username} </strong></p>
         <p>Location : {post.location}</p> 
    
          {isLoggedIn ? 
          // checkAuthor(currentUser, post.author.username) 
          post.isAuthor
          ? <button
          onClick = {()=>{
            setSelectedPost(post);
            console.log("I am setting the selected post to :",post.title );
            navigate('/PostDetailedView')
          }}
          >View Post</button> : <button>Send Message</button> 
          : <><br></br></>
          }
        </div>
         
        </>
    );
}

export default SinglePostView;

/*
note to self : when View Post is clicked setSelectedPost to post and then navigat to Post Detailed View . 
now when u reach the detailed you will have access to apost to display details of
then you should have a delte button that can be clicked to deleet the post 

*/


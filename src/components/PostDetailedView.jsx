import React from 'react';

const PostDetailedView = (props) => {

    const {isLoggedIn,currentUser, selectedPost, setSelectedPost} = props;
    console.log("islogged in", isLoggedIn);
const checkAuthor = (currUser, author) => 
{
    return (currUser === author );
}

    return(
        <>
        <div id = 'single-post-container'>
         <h3>{selectedPost.title}</h3>
         <p>{selectedPost.description}</p>
         <p><b>Price :</b>{selectedPost.price}</p>
         <p><strong>Seller : {selectedPost.author.username} </strong></p>
         <p>Location : {selectedPost.location}</p> 
          {isLoggedIn ? 
        //   checkAuthor(localStorage.getItem('currentUser'), selectedPost.author.username) 
        selectedPost.isAuthor?
         <button>DELETE</button> : <button>Send Message</button> 
          : <><br></br></>
          }
        </div>
         
        </>
    );
}

export default PostDetailedView;

{/* <button  //remove post
           onClick={async () => {
            setSelectedPost(post);
            await removePost(post.?);
            setSelectedPost({});
            let allPosts = await getAllPosts();
            setPostsList(allPosts);
          }}
          className="delete-button"> Delete Post</button> */}

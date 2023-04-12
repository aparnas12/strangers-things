const SinglePostView = (props) => {

    const {isLoggedIn,currentUser, post} = props;
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
    
          {isLoggedIn ? 
          checkAuthor(currentUser, post.author.username) ? <span><button>DELETE</button> <button>EDIT</button></span> : <button>Send Message</button> 
          : <><br></br></>
          }
        </div>
         
        </>
    );
}

export default SinglePostView;


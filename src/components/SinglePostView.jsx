const SinglePostView = (props) => {

    const {post} = props;
    return(
        <>
        <div id = 'single-post-container'>
         <h3>{post.title}</h3>
         <p>It works very well</p>
         <p><b>Price</b> : $</p>
         <p><strong>Seller : </strong></p>
         <p>Location :</p> 
         <span><button>DELETE</button> <button>EDIT</button></span>
        </div>
         
        </>
    );
}

export default SinglePostView;
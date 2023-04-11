import React from "react";
const EditPost = () => {
    return (
        <>
        <h2> Edit Post</h2>
        
            <form id='edit-post-form'>
            
            <span><label htmlFor="title">Title</label><input type ="text" name ="title" value ="" placeholder="Title" required/></span>
            <span><label>Description</label><input type ="text" name ="description" value ="" placeholder="Description" required/></span>
            <span><label>Price</label><input type ="number" name ="price" required/></span>
            <span><label>Location</label><input type ="text" name ="location" value ="" placeholder="Enter a location"/> </span>
           
            <button id ='save-post'>SAVE</button>
            </form>         
       
        
        </>
        
    );

}
export default EditPost;
import React from "react";
const AddNewPost = () => {
    return (
        <>
        <h2> Add New Post</h2>
        <form id='add-post-form'>
            <label htmlFor=" title">Title</label>
            <input type ="text" name ="title" value ="" placeholder="Title" required/>
            <input type ="text" name ="description" value ="" placeholder="Description" required/>
            <input type ="number" name ="price" required/>
            <input type ="text" name ="location" value ="" placeholder="Enter a location"/>  
            <button id ='create-post'>CREATE</button>
        </form>
        
        </>
        
    );

}
export default AddNewPost;
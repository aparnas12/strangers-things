
import React, { useState } from "react";

const SearchBar = (props) => {

    const { postsList, setReturnedPostList } = props;

    const [searchForPost, setSearchForPost] = useState('');

    const searchAllPosts = (postsArray, searchTerm) => {
        const result = postsArray.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
        return result;
    }

    return (
        <div className="search-bar">
            <label htmlFor="searchposts">Search for Posts:</label>
            <input
                type="text"
                name="searchposts"
                value={searchForPost}
                placeholder="Search By Title"
                onChange={(event) => setSearchForPost(event.target.value)}
            />
            <button
                onClick={() => {
                    console.log(searchForPost);
                    console.log(postsList);
                    let filteredList = searchAllPosts(postsList, searchForPost);
                    console.log(filteredList);
                    setReturnedPostList(filteredList);

                }}

                className='search-button'>Search</button>
        </div>
    );
}

export default SearchBar;
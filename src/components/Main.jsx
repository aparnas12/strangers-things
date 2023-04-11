import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import Header from './Header';
import AddNewPost from './AddNewPost'
import AllPosts from './AllPosts';
import SinglePostView from './SinglePostView';
import EditPost from './EditPost';
import MessagePreview from './MessagePreview'
import Profile from './Profile'
import { getAllPosts } from '../api';


const Main = () => {

  const [postsList, setPostsList]  = useState([]);
  //const [currentUser,setCurrentUser] = useState(null);


useEffect(() => {
    const getPosts = async () => {
      try {
        let allPosts = await getAllPosts();
        console.log("In use effect");
        setPostsList(allPosts);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);

  return (
    <div id="main">
        <Header />
        {/* <AllPosts postsList = {postsList} setPostsList ={setPostsList} /> */}
       
    </div>
  );
}

export default Main;

{/* <Profile postsList = {postsList}/>
<SinglePostView />
<LoginPage />
<EditPost />
<AddNewPost /> */}
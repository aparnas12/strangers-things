import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
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
  const [currentUser,setCurrentUser] = useState(null);
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


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
        <LoginPage token={token}
              setToken={setToken}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn} />

        {/* <AllPosts postsList = {postsList} setPostsList ={setPostsList} isLoggedIn={isLoggedIn} currentUser={currentUser}/> */}
       
    </div>
  );
}

export default Main;

{/* <Profile postsList = {postsList}/>
<SinglePostView />
<LoginPage token={token}
              setToken={setToken}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn} />
<EditPost />
<AddNewPost /> */}
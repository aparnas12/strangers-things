import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import{ Routes, Route } from 'react-router-dom';
import { LoginPage, Profile, AllPosts, Home, EditPost, AddNewPost, SinglePostView, SendMessageView, RegisterUser } from '.';
import { getAllPosts } from '../api';
import { getMe } from '../api';
import PostDetailedView from './PostDetailedView';

const Main = () => {

  const [postsList, setPostsList]  = useState([]);
  const [currentUser,setCurrentUser] = useState('');
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const [userMessages, setUserMessages] = useState([]);
  const [userPosts, setUserPosts] = useState([]);


useEffect(() => {
    const getPosts = async () => {
      try {
        let allPosts = await getAllPosts();
        console.log("In use effect");
        setPostsList(allPosts);
        if(token) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);
  
useEffect(() => {
  const fetchUser = async () => {
    try{
    if (token) {
    const fetchedUser = await getMe(token);
   setCurrentUser(fetchedUser.user.username) 
   setUserPosts(fetchedUser.user.posts)
   setUserMessages(fetchedUser.user.messages)
  }
  }
  catch (error) {
  console.error(error)
  }
  };
    fetchUser()
}, [token]);
  return (
    <div id="main">
        <Header 
        isLoggedIn ={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setCurrentUser={setCurrentUser}
        setToken={setToken}/>

    <Routes>

        <Route path='/RegisterUser' element={<RegisterUser token={token}
          setToken={setToken} 
          currentUser={currentUser} 
          setCurrentUser={setCurrentUser}  
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn} />}/>

          <Route path='/LoginPage' element={<LoginPage token={token}
          setToken={setToken} 
          currentUser={currentUser} 
          setCurrentUser={setCurrentUser}  
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn} />}/>

          <Route path='/Profile' element={<Profile postsList={postsList} 
          setPostsList={setPostsList}/>}/>

          <Route path='/Home' element={<Home isLoggedIn ={isLoggedIn} 
          currentUser = {currentUser}/>}/>

          <Route path='/AllPosts' element={<AllPosts postsList = {postsList} 
          setPostsList ={setPostsList} 
          isLoggedIn={isLoggedIn}
           currentUser={currentUser} 
           token = {token} 
           selectedPost = {selectedPost} 
           setSelectedPost = {setSelectedPost}/>}/>

          <Route path='/EditPost' element={<EditPost postsList={postsList} 
          setPostsList={setPostsList} 
          isLoggedIn ={isLoggedIn} 
          currentUser ={currentUser}/>}/>

          <Route path='/AddNewPost' element={<AddNewPost postsList={postsList} 
          setPostsList={setPostsList} 
          isLoggedIn ={isLoggedIn} 
          currentUser ={currentUser} 
          token = {token}/>}/>

          <Route path='/SendMessageView' element={<SendMessageView postsList={postsList} 
          setPostsList={setPostsList} 
          selectedPost = {selectedPost} 
          setSelectedPost = {setSelectedPost} />}/>

          <Route path ='/PostDetailedView' element ={<PostDetailedView selectedPost = {selectedPost} 
          setSelectedPost = {setSelectedPost}  
          isLoggedIn ={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn}/>}/>
      </Routes>
    
       
    </div>
  );
}

export default Main;


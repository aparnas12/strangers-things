import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
// import AddNewPost from './AddNewPost'
// import SinglePostView from './SinglePostView';
// import EditPost from './EditPost';
import{ Routes, Route } from 'react-router-dom';
import { LoginPage, Profile, AllPosts, Home } from '.';
import { getAllPosts } from '../api';

const Main = () => {

  const [postsList, setPostsList]  = useState([]);
  const [currentUser,setCurrentUser] = useState('');
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
//random comment

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
        <Header 
        isLoggedIn ={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setCurrentUser={setCurrentUser}
        setToken={setToken}/>
        <Routes>
            <Route path='/LoginPage' element={<LoginPage token={token}
            setToken={setToken} 
            currentUser={currentUser} 
            setCurrentUser={setCurrentUser}  
            isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn} />}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/Home' element={<Home isLoggedIn ={isLoggedIn} currentUser = {currentUser}/>}/>
            <Route path='AllPosts' element={<AllPosts postsList = {postsList} setPostsList ={setPostsList} isLoggedIn={isLoggedIn} currentUser={currentUser}/>}/>
        </Routes>
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
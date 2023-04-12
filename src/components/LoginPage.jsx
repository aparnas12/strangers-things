import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { loginUser } from '../api';


const LoginPage = ({
  isLoggedIn,
  setIsLoggedIn,
  token,
  setToken,
  currentUser,
  setCurrentUser,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(username);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    //create an  userObject
    // const user = {
    //   username: {username}, 
    //   password: {password}
    // }

   
   //short version of above?
    const userToAuth = { user: { username: username, password: password } };
    const data = await loginUser(userToAuth);
 //if token is returne then a user exist?
    if (data.token) {
      setToken(data.token);
      setCurrentUser(username);
      setIsLoggedIn(true);
    }
    setUsername('');
    setPassword('');
    navigate('/posts');
  }



  return (
    <>
      <h2>Log In</h2>
      <div id='login-container'>
        <form
          onSubmit={handleSubmit} >
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={(event) => setUsername(event.target.value)} />
          <label htmlFor='password'> Password</label>
          <input
            type='text'
            name='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
          <button type='submit'>LOG IN</button>
        </form>
      </div>
    </>

  );
}
export default LoginPage;
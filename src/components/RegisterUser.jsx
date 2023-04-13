import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { registerUser } from '../api';


const RegisterUser = ({
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
    const userToAuth = { user: { username: username, password: password } };
    
    const data = await registerUser(userToAuth);
    console.log(data);

    if (data.token) {
      setToken(data.token);
      console.log(data.token);
      setCurrentUser(username);
      console.log(username);
      setIsLoggedIn(true); }
      {
      console.log("login is set to true");
      setUsername('');
      setPassword('');
      navigate('/Home'); 
    }
   
   
  }

  return (
    <>
      <h2>Register</h2>
      <div id='register-container'>
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
          <button type='submit'>Create Account</button>
        </form>
      </div>
    </>

  );
}
export default RegisterUser;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
         setUsername('');
         setPassword('');
      }

  
      const handleChange = (event) => {
        setUsername(event.target.value);
        
      }

     

    return (
        <>
         <h2>Log In</h2>
        <div id = 'login-container'>
        <form  
        onSubmit={ handleSubmit } >
        <label htmlFor='username'>Username:</label>
        <input type='text' name='username' value={username} onChange={handleChange} />
        <label htmlFor ='password'> Password</label>
        <input type ='text' name ='password' value ={password} onChange = {(event) => setPassword(event.target.value)}/>    
        <button type ='submit'>LOG IN</button>
         </form>
        </div>
      
        </>

    );
}
export default LoginPage;
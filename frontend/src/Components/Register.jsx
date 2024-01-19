import {useNavigate , Link} from 'react-router-dom'
import React, { useState } from 'react'
import './Something.css'

const Register = () => {
    let navigateTo = useNavigate();
    let [username,setUsername] = useState('');
    let [password,setPassword] = useState('');
    let [gmail,setGmail] = useState('');

    let handleSubmit = async() => {
        let response = await fetch('http://localhost:4500/api/register',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username,password,gmail})
        });
        let data = await response.json();
        console.log(data);
        if (data.token) {
          // Redirect to another page after successful login
          window.location.href = '/login'; // Replace with the actual page URL
      } else {
          // Handle unsuccessful login, e.g., display an error message
          alert('Registration failed');
      }
    };


  return (
      <div className="form-container">
    <div id="postForm">
        <h1 className='font-black text-center text-[50px]'>Register.</h1>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor="gmail">Gmail:</label>
      <input type="text" id="email" value={gmail} onChange={(e) => setGmail(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <button type="submit" onClick={handleSubmit}>Register</button>
      <br />
    </div>
      
    <p>already have account? <Link to='/login'>here</Link>.</p>
    </div>
    </div>
  )
}

export default Register

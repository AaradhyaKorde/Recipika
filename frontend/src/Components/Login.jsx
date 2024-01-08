import React, { useState } from 'react'
import './Something.css'

const Login = () => {

    let [username,setUsername] = useState('');
    let [password,setPassword] = useState('');

    let handleSubmit = async(event) => {
        event.preventDefault();
        let response = await fetch('http://localhost:4500/api/login',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username,password})
        });
        let data = await response.json();
        console.log(data.token);
    };


  return (
      <div className="form-container">
    <form onSubmit={handleSubmit} id="postForm">
        <h1 className='font-black text-center text-[50px]'>Login.</h1>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <button type="submit" style={{
          
    }}>Login</button>
    </div>
    </form>
    </div>
  )
}

export default Login

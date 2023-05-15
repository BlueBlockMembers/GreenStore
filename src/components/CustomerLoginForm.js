import React, { useState } from 'react';
import './CustomerLogin.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted login form with username "${username}" and password "${password}"`);
    // TODO: Send login request to server
  };

  return (

    <div>
        <h1>Customer Login</h1>
        
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      
      <button type="submit">Login</button>
    </form>
    </div>
  );
}

export default LoginForm;

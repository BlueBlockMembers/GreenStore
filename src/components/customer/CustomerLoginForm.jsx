import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CustomerLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Customer');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform client-side validation
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    // Send login request to the server
    axios
      .post('http://localhost:8070/login/', { email, password, userType })
      .then((response) => {
        console.log(response.data); // Handle the successful login here
        if (response.data.message === 'Login successful') {
          setError('');

          localStorage.setItem('token', response.data.token); // Set the token in localStorage
          navigate('/report');
        } else {
          setError('Invalid email or password. Please try again.');
        }
      })
      .catch((error) => {
        setError('Invalid email or password. Please try again.'); // Handle the login error here
      });
  };

  return (
    <div>
      <h1>Customer Login</h1>
      <form onSubmit={handleSubmit}>

      <div>
          <label>User Type:</label>
          <select value={userType} onChange={(event) => setUserType(event.target.value)}>
            <option value="Customer">Customer</option>
            <option value="Seller">Seller</option>
          </select>
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

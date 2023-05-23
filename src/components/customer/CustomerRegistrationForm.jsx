import { useState } from 'react';
import "../../styles/customer/CustomerRegistrationForm.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CustomerRegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const customer = { name, email, password, city, state, zipCode };
      const response = await axios.post('http://localhost:8070/customers/create', customer);
      console.log(response);
      alert(`${customer.name} Added`);
      setName("");
      setEmail("");
      setPassword("");
      setCity("");
      setState("");
      setZipCode("");
      

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Link class="nav-navbar__link" to="/customers">View Customers</Link>
      <h1>Customer Register Form</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <label>
        State:
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </label>
      <label>
        Zip Code:
        <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

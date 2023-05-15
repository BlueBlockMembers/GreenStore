import { useEffect, useState } from 'react';
import "./CustomerRegistrationForm.css";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function CustomerEditForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/customers/${id}`);
        const userData = response.data;
        setName(userData.name);
        setEmail(userData.email);
        setPassword(userData.password);
        setCity(userData.city);
        setState(userData.state);
        setZipCode(userData.zipCode);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedCustomer = { name, email, password, city, state, zipCode };
      const response = await axios.patch(`http://localhost:8070/customers/${id}`, updatedCustomer);
      console.log(response);
      alert(`${updatedCustomer.name} Updated`);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <Link className="nav-navbar__link" to="/customers">View Customers</Link>

      <h1>Update Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </label>
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required/>
        </label>
        <label>
          State:
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} required/>
        </label>
        <label>
          Zip Code:
          <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required/>
        </label>
        <button type="submit">Submit</button>
        
      </form>
    </div>
  );
}

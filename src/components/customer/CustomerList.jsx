import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8070/customers/')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8070/customers/${id}`)
      .then(() => {
        setCustomers(customers => customers.filter(customer => customer._id !== id));
        alert("Customer deleted successfully");
      })
      .catch(error => {
        console.log(error);
      });
  };
  

  return (
    <div className="container">
      <h1>Customers</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => {
            return (
              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.city}</td>
                <td>{customer.state}</td>
                <td>{customer.zipCode}</td>
                <td>
                  <Link to={`/customers/${customer._id}`}>Show Details</Link>   
                </td>
                <td>
                <button onClick={() => handleDelete(customer._id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerList;

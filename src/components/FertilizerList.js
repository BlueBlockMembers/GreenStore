import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./FertilizerList.css";
import { Link } from 'react-router-dom';

function Fertilizers() {
  const [fertilizers, setFertilizers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8070/fertilizers/')
      .then(response => {
        setFertilizers(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);



  const handleDelete = (id) => {
    axios.delete(`http://localhost:8070/fertilizers/${id}`)
      .then(() => {
        setFertilizers(fertilizers => fertilizers.filter(fertilizer => fertilizer._id !== id));
        alert("Customer deleted successfully");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
    <div>
      <Link to="../">Go Back</Link>
    </div>
      <h1>Fertilizers</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight</th>
            <th>Price</th>
            <th>Type</th>
            <th>MFD</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {fertilizers.map(fertilizer => {
            return (
              <tr key={fertilizer._id}>
                <td>{fertilizer.name}</td>
                <td>{fertilizer.weight} KG</td>
                <td>LKR {fertilizer.price}</td>
                <td>{fertilizer.type}</td>
                <td>{fertilizer.manufacturingDate}</td>
                <td>
                <Link to={`/fertilizers/${fertilizer._id}`}>Show Details</Link>   
                  </td>
                  <td>
                  <button onClick={()=>{handleDelete(fertilizer._id)}}> Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Fertilizers;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./FertilizerList.css";

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

  return (
    <div className="container">
      <h1>Fertilizers</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight</th>
            <th>Price</th>
            <th>Manufacturing Date</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {fertilizers.map(fertilizer => {
            return (
              <tr key={fertilizer._id}>
                <td>{fertilizer.name}</td>
                <td>{fertilizer.weight}</td>
                <td>{fertilizer.price}</td>
                <td>{fertilizer.manufacturingDate}</td>
                <td>{fertilizer.createdDate}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Fertilizers;

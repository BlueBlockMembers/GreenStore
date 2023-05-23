import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/fertilizer/FertilizerList.css";

import { Link } from 'react-router-dom';

function FertilizerList() {
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
    <div className="all-products-container">
      <h1 className="title">Recommended Fertilizers</h1>
      <div className="product-grid-container">
        {fertilizers.map(fertilizer => (
          <div key={fertilizer._id} className="product-card">
            <div className="product-image-container">
              <Link to={`/fertilizers/${fertilizer._id}`}>
                <img src={fertilizer.image} alt={fertilizer.name} />
              </Link>
            </div>
            <div className="product-details-container">
              <h3 className="product-name">{fertilizer.name}</h3>
              <p className="product-price">${fertilizer.price}</p>
              <div className="buttons-container">
                <button className="button add-to-cart" >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FertilizerList;

import React, { useState } from "react";
import "./FertilizerForm.css";

const FertilizerForm = ({ onFertilizerSubmit }) => {
  const [fertilizer, setFertilizer] = useState({
    name: "",
    weight: "",
    price: "",
    manufacturingDate: "",
    createdDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFertilizer((prevFertilizer) => ({
      ...prevFertilizer,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFertilizerSubmit(fertilizer);
    setFertilizer({
      name: "",
      weight: "",
      price: "",
      manufacturingDate: "",
      createdDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="fertilizer-form">
     
     <h2 class="form-topic">ADD NEW FERTILIZER</h2>
     
      <div className="form-group">
        <label htmlFor="name">Fertilizer Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={fertilizer.name}
          onChange={handleInputChange}
          required
        />
      </div>


      <div className="form-group">
        <label htmlFor="weight">Fertilizer Weight:</label>
        <input
          type="text"
          name="weight"
          id="weight"
          value={fertilizer.weight}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Fertilizer Price:</label>
        <input
          type="text"
          name="price"
          id="price"
          value={fertilizer.price}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="manufacturingDate">Manufacturing Date:</label>
        <input
          type="date"
          name="manufacturingDate"
          id="manufacturingDate"
          value={fertilizer.manufacturingDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="createdDate">Created Date:</label>
        <input
          type="date"
          name="createdDate"
          id="createdDate"
          value={fertilizer.createdDate}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit">Add Fertilizer</button>
    </form>
  );
};

export default FertilizerForm;

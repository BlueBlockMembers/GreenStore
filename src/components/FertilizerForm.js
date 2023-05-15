import React, { useState } from 'react';
import axios from 'axios';
import "./FertilizerForm.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function FertilizerForm() {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [manufacturingDate, setManufacturingDate] = useState('');
  const [createdDate, setCreatedDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const fertilizer = { name, weight, price, type, manufacturingDate, createdDate };
      const response = await axios.post('http://localhost:8070/fertilizers/create', fertilizer);
      console.log(response);
      alert(`${fertilizer.name} Added`);
      setName("");
      setWeight("");
      setPrice("");
      setType("");
      setManufacturingDate("");
      setCreatedDate("");
      

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="fertilizer-form-container">
      <div className="fertilizer-form">
        <h1 className="form-topic">Add Fertilizer</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight:</label>
            <input type="number" id="weight" value={weight} onChange={(event) => setWeight(event.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" value={price} onChange={(event) => setPrice(event.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="price">Type :</label>
            <input type="text" id="type" value={type} onChange={(event) => setType(event.target.value)} required />
          </div>

          <div className="form-group">
            <label htmlFor="manufacturingDate">Manufacturing Date:</label>
            <DatePicker id="manufacturingDate" selected={manufacturingDate} onChange={(date) => setManufacturingDate(date)} dateFormat="dd/MM/yyyy" required/>

          </div>
          <div className="form-group">
            <label htmlFor="createdDate">Created Date:</label>
            <DatePicker id="createdDate" selected={createdDate} onChange={(date) => setCreatedDate(date)} dateFormat="dd/MM/yyyy" required/>
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default FertilizerForm;

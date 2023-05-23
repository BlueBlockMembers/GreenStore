import { useEffect, useState } from 'react';
import axios from 'axios';
import "../../styles/fertilizer/FertilizerForm.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useParams } from 'react-router-dom';

function FertilizerEditForm() {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [manufacturingDate, setManufacturingDate] = useState('');
  const [createdDate, setCreatedDate] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const fetchFertilizerData = async () => {
      try {
        const response = await axios.get(`http://localhost:8070/fertilizers/${id}`);
        const fertilizerData = response.data;
        setName(fertilizerData.name);
        setWeight(fertilizerData.weight);
        setPrice(fertilizerData.price);
        setType(fertilizerData.type);
        setManufacturingDate(new Date(fertilizerData.manufacturingDate));
        setCreatedDate(new Date(fertilizerData.createdDate));
      } catch (error) {
        console.log(error);
      }
    };

    fetchFertilizerData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedFertilizer = { name, weight, price,type, manufacturingDate, createdDate };
      const response = await axios.patch(`http://localhost:8070/fertilizers/${id}`, updatedFertilizer);
      console.log(response);
      alert(`${updatedFertilizer.name} Updated`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Link className="nav-navbar__link" to="/view">View Fertilizers</Link>

      <h1 className="form-topic">Update Fertilizer Data</h1>
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
          <label htmlFor="type">Type :</label>
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
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default FertilizerEditForm;

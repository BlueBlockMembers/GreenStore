import React, { useState, useEffect } from "react";
import axios from "axios";
import fertilizers from "./FertilizerGenTable";
import "../../styles/fertilizer/FertilizerGen.css";
import jwt_decode from "jwt-decode";

const FertilizerGeneratorForm = () => {
  const [plantName, setPlantName] = useState("");
  const [growthStage, setGrowthStage] = useState("");
  const [time, setTime] = useState("");
  const [fertilizerType, setFertilizerType] = useState("");
  const [fertilizerAmount, setFertilizerAmount] = useState("");
  const [fertilizerFrequency, setFertilizerFrequency] = useState("");
  const [filteredFertilizers, setFilteredFertilizers] = useState([]);

  
  const fetchFertilizers = async (type) => {
    try {
      const response = await axios.get(`http://localhost:8070/fertilizers`);
      const filteredData = response.data.filter((fertilizer) =>
        fertilizer.type.toLowerCase() === type.toLowerCase()
      );
      setFilteredFertilizers(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async (fertilizerId) => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const decodedToken = jwt_decode(token);
        const customerId = decodedToken.customer._id;

        console.log(customerId);

        const response = await axios.post(
          `http://localhost:8070/cart/${customerId}/add`,
          {
            customerId,
            fertilizerId,
            quantity: 1,
          }
        );
        console.log("Item added to cart:", response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (fertilizers[plantName] && fertilizers[plantName][growthStage]) {
      let { type, amount, frequency } = fertilizers[plantName][growthStage];

      if (time === "Morning") {
        amount *= 1.25;
      } else if (time === "Afternoon") {
        amount *= 0.75;
      }

      setFertilizerType(type);
      setFertilizerAmount(amount);
      setFertilizerFrequency(frequency);

      fetchFertilizers(type);
    } else {
      setFertilizerType("");
      setFertilizerAmount("");
      setFertilizerFrequency("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 class="page-title">Generate Fertilizer</h1>
        <label>
          Select a plant:
          <select
            value={plantName}
            onChange={(event) => setPlantName(event.target.value)}
          >
            {Object.keys(fertilizers).map((plant) => (
              <option key={plant} value={plant}>
                {plant}
              </option>
            ))}
          </select>
        </label>

        <label>
          Growth stage:
          <select
            value={growthStage}
            onChange={(event) => setGrowthStage(event.target.value)}
          >
            <option value="">Select Growth Stage</option>
            <option value="Seedling">Seedling</option>
            <option value="Vegetative">Vegetative</option>
            <option value="Flowering">Flowering</option>
            <option value="Fruiting">Fruiting</option>
          </select>
        </label>
        <label>
          Time:
          <select
            value={time}
            onChange={(event) => setTime(event.target.value)}
          >
            <option value="">Select Time</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
          </select>
        </label>
        <button type="submit">Generate fertilizer</button>

        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Frequency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{fertilizerType}</td>
              <td>{fertilizerAmount} pounds</td>
              <td>{fertilizerFrequency}</td>
            </tr>
          </tbody>
        </table>
      </form>
      <h2 style={{ textAlign: "center" }}>
        Find the most suitable fertilizer from the below
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight</th>
            <th>Price</th>
            <th>Type</th>
            <th>Manufacturing Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredFertilizers.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No values to display
              </td>
            </tr>
          ) : (
            filteredFertilizers.map((fertilizer) => (
              <tr key={fertilizer._id}>
                <td>{fertilizer.name}</td>
                <td>{fertilizer.weight} KG</td>
                <td>LKR {fertilizer.price}</td>
                <td>{fertilizer.type}</td>
                <td>{fertilizer.manufacturingDate}</td>
                <td>
                  <button className="buy-button">Buy Now</button>
                  <button
                    className="add-to-cart-button"
                    onClick={() => addToCart(fertilizer._id)}
                  >
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FertilizerGeneratorForm;

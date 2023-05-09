import React, { useState } from "react";
import fertilizers from "../components/FertilizerGenTable";


const FertilizerGeneratorForm = () => {
  const [plantName, setPlantName] = useState("");
  const [growthStage, setGrowthStage] = useState("");
  const [time, setTime] = useState("");
  const [fertilizerType, setFertilizerType] = useState("");
  const [fertilizerAmount, setFertilizerAmount] = useState("");
  const [fertilizerFrequency, setFertilizerFrequency] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if plantName and growthStage are valid before accessing fertilizers object
    if (fertilizers[plantName] && fertilizers[plantName][growthStage]) {
      let { type, amount, frequency } = fertilizers[plantName][growthStage];

      if (time === "Morning") {
        // Increase nitrogen by 25%
        amount *= 1.25;
      } else if (time === "Afternoon") {
        // Decrease nitrogen by 25%
        amount *= 0.75;
      }

      setFertilizerType(type);
      setFertilizerAmount(amount);
      setFertilizerFrequency(frequency);
    } else {
      // Handle case where plantName or growthStage is invalid
      setFertilizerType("");
      setFertilizerAmount("");
      setFertilizerFrequency("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 class="page-title">Generate Fertilizer</h1>
      <label>
            Select a plant:
            <select value={plantName} onChange={(event) => setPlantName(event.target.value)}>
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
        <select value={time} onChange={(event) => setTime(event.target.value)}>
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




  );
};

export default FertilizerGeneratorForm;

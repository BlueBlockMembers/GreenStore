import React, { useState } from "react";
import "./FertilizerGenerator.css"; // import your CSS file

const FertilizerGeneratorForm = () => {
  const [plantName, setPlantName] = useState("");
  const [growthStage, setGrowthStage] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the FertilizerGenerator component with the input values
  };

  return (
    <form onSubmit={handleSubmit}>

    <h1 class="page-title">Generate Fertilizer</h1>

      <label>
        Plant name:
        <input
          type="text"
          value={plantName}
          onChange={(event) => setPlantName(event.target.value)}
        />
      </label>
      <label>
        Growth stage:
        <select value={growthStage} onChange={(event) => setGrowthStage(event.target.value)}>
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
          <option value="Evening">Evening</option>
        </select>
      </label>
      <button type="submit">Generate fertilizer</button>
    </form>
  );
};

export default FertilizerGeneratorForm;

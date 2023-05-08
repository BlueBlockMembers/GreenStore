import React from "react";
import "./FertilizerGenerator.css"; // import your CSS file

const FertilizerTable = () => {
  const data = [
    { plantName: "Tomato", growthStage: "Vegetative", time: "Morning", fertilizerType: "NPK 20-20-20" },
    { plantName: "Lettuce", growthStage: "Seedling", time: "Afternoon", fertilizerType: "NPK 10-10-10" },
    { plantName: "Pepper", growthStage: "Flowering", time: "Evening", fertilizerType: "NPK 15-15-15" },
  ];

  return (
    <div className="fertilizer-table">
      <h2 className="page-title">History Data</h2>
      <table>
        <thead>
          <tr>
            <th>Plant Name</th>
            <th>Growth Stage</th>
            <th>Time</th>
            <th>Fertilizer Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.plantName}</td>
              <td>{item.growthStage}</td>
              <td>{item.time}</td>
              <td>{item.fertilizerType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FertilizerTable;

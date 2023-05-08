import React from "react";
import "./FertilizerList.css";

const dummyData = [
  {
    id: 1,
    name: "Phosphorus fertilizer",
    weight: "1 kg",
    price: "Rs. 480",
    manufacturingDate: "2023-03-23",
    createdDate: "2023-03-23",
  },
  {
    id: 2,
    name: "Phosphorus fertilizer",
    weight: "1 kg",
    price: "Rs. 480 ",
    manufacturingDate: "2023-03-23",
    createdDate: "2023-03-23",
  },
];

const FertilizerList = ({ fertilizers = dummyData }) => {
  if (!fertilizers.length) {
    return (
      <div>
        <p>No fertilizers found.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 class="page-title">Available Fertilizers</h1>

    <table>
      
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
        {fertilizers.map((fertilizer) => (
          <tr key={fertilizer.id}>
            <td>{fertilizer.name}</td>
            <td>{fertilizer.weight}</td>
            <td>{fertilizer.price}</td>
            <td>{fertilizer.manufacturingDate}</td>
            <td>{fertilizer.createdDate}</td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
  );

};

export default FertilizerList;

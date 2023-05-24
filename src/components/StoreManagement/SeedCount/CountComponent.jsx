import React from "react";

const CountComponent = ({ title, count }) => {
  return (
    <div
      className="container  rounded border mr-2 shadow-lg mt-2  text-center "
      style={{ height: "150px" }}
    >
      <div className="mt-5" style={{ color: "#009220" }}>
        <h6
          className="font-weight-bold"
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          {title}
        </h6>
        <h6 style={{ fontSize: "25px", fontWeight: "bold" }}>{count}</h6>
      </div>
    </div>
  );
};

export default CountComponent;

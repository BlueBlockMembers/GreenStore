import React from "react";
import CountComponent from "./CountComponent";

const CountContainer = () => {
  return (
    <div
      className="rounded border mr-2 shadow-lg mt-2 w-100"
      style={{ height: "400px" }}
    >
      <div className="mt-4 mb-4" style={{ marginLeft: "750px" }}>
        <button className="btn btnAdd" style={{ marginRight: "150px" }}>
          New Tool
        </button>
        <button className="btn btnAdd ">New Seed</button>
      </div>
      <div className="row" style={{ marginLeft: "250px", marginTop: "100px" }}>
        <div className="col-1" style={{ width: "350px" }}>
          <CountComponent title={"Tool Count"} count={20} />
        </div>
        <div className="col-1" style={{ width: "350px" }}>
          <CountComponent title={"Seed Count"} count={20} />
        </div>
      </div>
    </div>
  );
};

export default CountContainer;

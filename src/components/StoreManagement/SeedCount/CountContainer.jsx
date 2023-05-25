import React, { useEffect, useState } from "react";
import CountComponent from "./CountComponent";
import { useSelector, useDispatch } from "react-redux";
import { getTool } from "../../../store/actions/ToolActions";
import { getSeed } from "../../../store/actions/SeedActions";

const CountContainer = () => {
  const seedState = useSelector((state) => state.Seeds);
  const toolState = useSelector((state) => state.Tools);

  const [toolCount, setToolCount] = useState();
  const [seedCount, setSeedCount] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTool());
    dispatch(getSeed());
  }, []);

  useEffect(() => {
    console.log(toolState);
    setToolCount(toolState.tools.length);
    setSeedCount(seedState.seeds.length);
  }, [toolState, seedState]);

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
          <CountComponent title={"Tool Count"} count={toolCount} />
        </div>
        <div className="col-1" style={{ width: "350px" }}>
          <CountComponent title={"Seed Count"} count={seedCount} />
        </div>
      </div>
    </div>
  );
};

export default CountContainer;

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { getTool, deleteTool } from "../../../store/actions/ToolActions";
import { getSeed, deleteSeed } from "../../../store/actions/SeedActions";
import { PuffLoader } from "react-spinners";

const ToolAndSeedList = () => {
  const toolState = useSelector((state) => state.Tools);
  const seedState = useSelector((state) => state.Seeds);

  const dispatch = useDispatch();

  let [color, setColor] = useState("#116416");
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#116416",
  };

  const deleteSeeds = async (id) => {
    await dispatch(deleteSeed(id))
      .then((res) => {
        if (!seedState.error) {
          Swal.fire({
            title: "Success!",
            text: `${res.payload.message}`,
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: `${seedState.error}`,
            icon: "error",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: `${seedState.error}`,
          icon: "error",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
      });
    dispatch(getSeed());
  };

  const deleteTools = async (id) => {
    await dispatch(deleteTool(id))
      .then((res) => {
        if (!toolState.error) {
          Swal.fire({
            title: "Success!",
            text: `${res.payload.message}`,
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: `${toolState.error}`,
            icon: "error",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: `${toolState.error}`,
          icon: "error",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
      });
    dispatch(getTool());
  };

  return (
    <div className="row " style={{ marginLeft: "150px" }}>
      <div className="col 1 ">
        <div className="item rounded border mr-2 shadow-lg mt-2 w-75 ">
          <div className="row">
            <h6 className=" mx-4 mb-0 fw-bold mt-2 mb-2 pl-2 ">Tools</h6>
            <div className="table-responsive">
              <table
                className="table table-striped custom-table"
                id="assignLabsTable"
              >
                <thead>
                  <tr style={{ backgroundColor: "#C4C4C4" }}>
                    <th scope="col">ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {toolState?.loading && (
                    <tr>
                      <td colSpan="6" className="text-center">
                        <PuffLoader
                          color={color}
                          loading={toolState.loading}
                          cssOverride={override}
                          size={150}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                      </td>
                    </tr>
                  )}
                  {!toolState?.loading && toolState?.error ? (
                    <tr>
                      <td>Error: {toolState?.error}</td>
                    </tr>
                  ) : null}
                  {!toolState?.loading && toolState.tools?.length
                    ? toolState.tools.map((state) => (
                        <tr itemScope="row" id={state._id} key={state._id}>
                          <td>{state.id}</td>
                          <td>{state.image}</td>
                          <td>{state.name}</td>
                          <td>{state.description}</td>
                          <td>{state.price}</td>
                          <td>
                            <i
                              className="fa-solid fa-pen me-3 text-primary"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              style={{ cursor: "pointer" }}
                            ></i>
                            <i
                              className="fa-solid fa-trash-can d-inline me-2 text-danger"
                              onClick={(e) => {
                                e.preventDefault();
                                deleteTools(state.id);
                              }}
                              style={{ cursor: "pointer" }}
                            ></i>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col 1">
        <div className="item rounded border mr-2 shadow-lg mt-2 w-75 ">
          <div className="row">
            <h6 className=" mx-4 mb-0 fw-bold mt-2 mb-2 pl-2 ">Seeds</h6>
            <div className="table-responsive">
              <table
                className="table table-striped custom-table"
                id="assignLabsTable"
              >
                <thead>
                  <tr style={{ backgroundColor: "#C4C4C4" }}>
                    <th scope="col">ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {seedState?.loading && (
                    <tr>
                      <td colSpan="6" className="text-center">
                        <PuffLoader
                          color={color}
                          loading={seedState.loading}
                          cssOverride={override}
                          size={150}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                      </td>
                    </tr>
                  )}
                  {!seedState?.loading && seedState?.error ? (
                    <tr>
                      <td>Error: {seedState?.error}</td>
                    </tr>
                  ) : null}
                  {!seedState?.loading && seedState.seeds?.length
                    ? seedState.seeds.map((state) => (
                        <tr itemScope="row" id={state._id} key={state._id}>
                          <td>{state.id}</td>
                          <td>{state.image}</td>
                          <td>{state.name}</td>
                          <td>{state.description}</td>
                          <td>{state.price}</td>
                          <td>
                            <i
                              className="fa-solid fa-pen me-3 text-primary"
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              style={{ cursor: "pointer" }}
                            ></i>
                            <i
                              className="fa-solid fa-trash-can d-inline me-2 text-danger"
                              onClick={(e) => {
                                e.preventDefault();
                                deleteSeeds(state.id);
                              }}
                              style={{ cursor: "pointer" }}
                            ></i>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolAndSeedList;

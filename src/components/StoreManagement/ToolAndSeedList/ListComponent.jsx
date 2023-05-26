import React, { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

function ListComponent({ title, state }) {
  let [color, setColor] = useState("#116416");

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div className="item rounded border mr-2 shadow-lg mt-2 w-75 ">
      <div className="row">
        <h6 className=" mx-4 mb-0 fw-bold mt-2 mb-2 pl-2 ">{title}</h6>
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
                <th scope="col">@</th>
              </tr>
            </thead>
            <tbody>
              {state?.loading && (
                <tr>
                  <td colSpan="6" className="text-center">
                    <PuffLoader
                      color={color}
                      loading={state.loading}
                      cssOverride={override}
                      size={150}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </td>
                </tr>
              )}
              {!state?.loading && state?.error ? (
                <tr>
                  <td>Error: {state?.error}</td>
                </tr>
              ) : null}
              {!state?.loading && state?.state.length
                ? state.state.map((state) => (
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
                        ></i>
                        <i
                          className="fa-solid fa-trash-can d-inline me-2 text-danger"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
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
  );
}

export default ListComponent;

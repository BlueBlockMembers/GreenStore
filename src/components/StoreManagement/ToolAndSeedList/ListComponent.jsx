import React from "react";

function ListComponent({ title }) {
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
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListComponent;

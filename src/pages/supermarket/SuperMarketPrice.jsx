import React from 'react';
import '../../styles/SupermarketPrice.css'
import AdminLayout from "../../layouts/adminLayout.jsx";

function SuperMarketPrice(props) {
    return (<AdminLayout class="wrapper">
        <div className="main_container">
            <div className="item d-flex align-items-center txt-title">
                <h6 className="mb-0 fw-bold">Super market price Management</h6>
            </div>

            <div className="item">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <p className="pt-4 mb-0 fw-bold" data-bs-toggle="collapse" style={{"cursor": "pointer"}}
                           data-bs-target="#collapseExample"
                           aria-expanded="false" aria-controls="collapseExample">Cheapest Items in Supermarkets</p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="d-flex justify-content-end align-items-center">
                                <button id="btn-generate-report" className="btn me-3">Generate Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="collapse mt-3" id="collapseExample">
                    <div className="card card-body">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table">
                                <thead>
                                <tr>
                                    <th scope="col">Item ID</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Item Price</th>
                                    <th scope="col">Last Week Price</th>
                                    <th scope="col">Yesterday Price</th>
                                    <th scope="col">Today Price</th>
                                </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="col-lg-12">
                    <div className="item">
                        <h5 className="modal-title fw-bold" >Supermarkets prices in Sri
                            Lanka</h5>
                        <div className="row">
                            <div className="offset-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="row">
                                    <div className="d-flex justify-content-end align-items-center">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <input id="searchID" type="text" className="form-control col-8 me-5"
                                                   placeholder="Item Name"/>
                                        </div>
                                        <div>
                                            <input type="button" className="form-control btnSearch text-white"
                                                   value="Search"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <form id="superMarketPriceForm">
                            <div className="row">
                                <div className="col">
                                    <select name="superMarketPriceID" id="itemName"
                                            className="form-select" aria-label="role">
                                        <option selected disabled value="0">Item</option>

                                    </select>
                                    <small
                                        htmlFor="itemName"
                                        className="d-block text-danger form-text invalid-feedback"
                                    ></small>
                                </div>

                                <div className="col-6 d-flex">
                                    <span style={{"background": "#24353E"}}
                                          className="input-group-text d-inline text-white"
                                          id="basic-addon1">RS:</span>
                                    <input id="yPrice" type="text"
                                           className="form-control  d-inline"
                                           placeholder="Yesterday Price" name="yprice"/>
                                </div>
                                <small
                                    htmlFor="yPrice"
                                    className="d-block text-danger form-text invalid-feedback"
                                ></small>
                            </div>

                            <div className="row mt-4">
                                <div className="col-6 d-flex">
                                    <span style={{"background": "#24353E"}}
                                          className="input-group-text d-inline text-white"
                                          id="basic-addon1">RS:</span>
                                    <input id="tPrice" type="text"
                                           className="form-control  d-inline"
                                           placeholder="Today Price" name="price"/>
                                </div>
                                <small
                                    htmlFor="tPrice"
                                    className="d-block text-danger form-text invalid-feedback"
                                ></small>
                            </div>
                            <div className="row mt-4">
                                <div className="d-flex justify-content-around align-items-center">
                                    <button type="submit" className="btn btnAdd ">Register</button>
                                    <button type="button" className="btn btnUpdate btn-secondary">Update</button>
                                    <button type="button" className="btn btnDelete">Delete</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*<div className="item d-flex align-item-center txt-title">*/}
            {/*    <div className="row">*/}
            {/*        <h6 className="mb-0 fw-bold">Staff Management</h6>*/}
            {/*        <span className="chevron bottom" />*/}
            {/*        <span className="chevron top" />*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="item">
                <div className="row">
                    <h6 className="mb-0 fw-bold mt-2 mb-2">Supermarkets prices list in Sri Lanka</h6>
                    <div className="table-responsive">
                        <table className="table table-striped custom-table" id="assignLabsTable">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Item Image</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Yesterday Price</th>
                                <th scope="col">Today Price</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>);
}

export default SuperMarketPrice;
import React from 'react';

function SupermarketPriceForm(props) {
    return (
        <div className="item">
            <div className="col-lg-12">
                <div className="item">
                    <h5 className="modal-title fw-bold">Supermarkets prices in Sri
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
    );
}

export default SupermarketPriceForm;
import React from 'react';

function CheapestItemList(props) {
    return (
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
    );
}

export default CheapestItemList;
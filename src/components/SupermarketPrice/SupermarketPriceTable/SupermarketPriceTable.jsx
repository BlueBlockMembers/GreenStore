import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getAllSupermarketPriceDetails} from "../../../store/reducers/supermarketPriceReducer.js";

function SupermarketPriceTable(props) {

    const supermarketPriceDetails = useSelector(state => state.supermarketPrice.supermarketPrices);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSupermarketPriceDetails());
    }, []);


    console.log(supermarketPriceDetails);

    return (
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
    );
}

export default SupermarketPriceTable;
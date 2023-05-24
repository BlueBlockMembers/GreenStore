import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {deleteDetails, getAll, search} from "../../../store/actions/supermarketPriceActions";
import Swal from "sweetalert2";

function SupermarketPriceTable() {
    const supermarketPriceState = useSelector(state => state.supermarketPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, []);


    const deleteSupermarketPrice = async (id) => {
        await dispatch(deleteDetails(id)).then((res) => {
            if (!supermarketPriceState.error) {
                Swal.fire({
                    title: 'Success!',
                    text: `${res.payload.message}`,
                    icon: 'success',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: `${supermarketPriceState.error}`,
                    icon: 'error',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                });
            }
        }).catch((err) => {
            Swal.fire({
                title: 'Error!',
                text: `${supermarketPriceState.error}`,
                icon: 'error',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
            });
        });
    }


    return (<div className="item">
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
                    {supermarketPriceState.loading &&
                        <tr>
                            <td>Loading...</td>
                        </tr>}
                    {!supermarketPriceState.loading && supermarketPriceState.error ?
                        <tr>
                            <td>Error: {supermarketPriceState.error}</td>
                        </tr> : null}
                    {!supermarketPriceState.loading && supermarketPriceState.supermarketPrices.length ?
                        (
                            supermarketPriceState.supermarketPrices.map(superMarket =>
                                (
                                    <tr itemScope="row" id={superMarket._id} key={superMarket._id}>
                                        <td>
                                            {superMarket.superMarketPriceID}
                                        </td>
                                        <td>{superMarket.itemName}</td>
                                        <td>{superMarket.itemName}</td>
                                        <td>
                                            {superMarket.yesterDayPrice}
                                        </td>
                                        <td>
                                            {superMarket.toDayPrice}
                                        </td>
                                        <td>
                                            <i className="fa-solid fa-pen me-3 text-primary" onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(search(superMarket.superMarketPriceID));
                                            }}></i>
                                            <i className="fa-solid fa-trash-can d-inline me-2 text-danger"
                                               onClick={(e) => {
                                                   e.preventDefault();
                                                   deleteSupermarketPrice(superMarket.superMarketPriceID);
                                               }}
                                            ></i>
                                        </td>
                                    </tr>
                                )
                            )
                        ) : null}
                    </tbody>
                </table>
            </div>
        </div>
    </div>);
}

export default SupermarketPriceTable;
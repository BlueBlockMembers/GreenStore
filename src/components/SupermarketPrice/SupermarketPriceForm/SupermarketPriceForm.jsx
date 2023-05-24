import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAll, update} from "../../../store/actions/supermarketPriceActions.js";

function SupermarketPriceForm() {
    const supermarketPriceState = useSelector(state => state.supermarketPrice);
    const dispatch = useDispatch();
    const [id, setId] = useState()
    const [superMarketPriceID, setSuperMarketPriceID] = useState()
    const [itemId, setItemId] = useState()
    const [itemName, setItemName] = useState()
    const [yesterdayPrice, setYesterdayPrice] = useState()
    const [todayPrice, setTodayPrice] = useState()

    useEffect(() => {
        setId(supermarketPriceState.selectedSupermarketPrice._id)
        setSuperMarketPriceID(supermarketPriceState.selectedSupermarketPrice.superMarketPriceID)
        setItemId(supermarketPriceState.selectedSupermarketPrice.itemId)
        setItemName(supermarketPriceState.selectedSupermarketPrice.itemName)
        setYesterdayPrice(supermarketPriceState.selectedSupermarketPrice.yesterDayPrice)
        setTodayPrice(supermarketPriceState.selectedSupermarketPrice.toDayPrice)
    }, [supermarketPriceState.selectedSupermarketPrice])


    const handleUpdateSubmit = async () => {
        const payload = {
            _id: id,
            superMarketPriceID: superMarketPriceID,
            itemId: itemId,
            itemName: itemName,
            yesterDayPrice: yesterdayPrice,
            toDayPrice: todayPrice,
        };

        if (supermarketPriceState.selectedSupermarketPrice.superMarketPriceID) {
            // Dispatch the update action here
            // Dispatch the update action here
            await dispatch(update(payload)).then(() => {
                if (!supermarketPriceState.error) {
                    clearForm();
                }
            });
            dispatch(getAll());
        }
    };

    const clearForm = () => {
        setId('')
        setSuperMarketPriceID('')
        setItemId('0')
        setItemName('0')
        setYesterdayPrice('')
        setTodayPrice('')
        document.getElementById("superMarketPriceForm").reset();
    }

    return (<div className="item">
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
                                           placeholder="Item Name" value={itemName}
                                           onChange={(e) => {
                                               setItemName(e.target.value)
                                           }}
                                    />
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
                                    className="form-select" aria-label="role"
                                    value={itemName}
                                    onChange={(e) => {
                                        setItemName(e.target.value)
                                    }}>
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
                                   placeholder="Yesterday Price" name="yprice"
                                   value={yesterdayPrice}
                                   onChange={(e) => {
                                       setYesterdayPrice(e.target.value)
                                   }}/>
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
                                   value={todayPrice}
                                   placeholder="Today Price" name="price" onChange={(e) => {
                                setTodayPrice(e.target.value)
                            }}/>
                        </div>
                        <small
                            htmlFor="tPrice"
                            className="d-block text-danger form-text invalid-feedback"
                        ></small>
                    </div>
                    <div className="row mt-4">
                        <div className="d-flex justify-content-around align-items-center">
                            <button type="submit" className="btn btnAdd ">Register</button>
                            <button type="button" className="btn btnUpdate btn-secondary" onClick={() => {
                                handleUpdateSubmit()
                            }}>Update
                            </button>
                            <button type="button" className="btn btnDelete">Delete</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

export default SupermarketPriceForm;
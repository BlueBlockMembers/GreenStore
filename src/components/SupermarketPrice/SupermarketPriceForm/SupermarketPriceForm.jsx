import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {add, getAll, update} from "../../../store/actions/supermarketPriceActions";
import Swal from 'sweetalert2'
import validateSupermarketPrice from "../../../validations/supermarketPrice.validation.js";
import {getAllProducts} from "../../../store/actions/productsActions.js";


function SupermarketPriceForm() {
    const supermarketPriceState = useSelector(state => state.supermarketPrice);
    const productState = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [id, setId] = useState("")
    const [superMarketPriceID, setSuperMarketPriceID] = useState("")
    const [ItemId, setItemId] = useState("")
    const [itemName, setItemName] = useState("")
    const [searchItemName, setSearchItemName] = useState("")
    const [yesterdayPrice, setYesterdayPrice] = useState("")
    const [todayPrice, setTodayPrice] = useState("")
    const [productList, setProductList] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (supermarketPriceState.selectedSupermarketPrice._id) {
            setId(supermarketPriceState.selectedSupermarketPrice._id)
            setSuperMarketPriceID(supermarketPriceState.selectedSupermarketPrice.superMarketPriceID)
            setItemId(supermarketPriceState.selectedSupermarketPrice.itemId)
            setItemName(supermarketPriceState.selectedSupermarketPrice.itemName)
            setYesterdayPrice(supermarketPriceState.selectedSupermarketPrice.yesterDayPrice)
            setTodayPrice(supermarketPriceState.selectedSupermarketPrice.toDayPrice)
        } else {
            setId(supermarketPriceState._id)
            setSuperMarketPriceID(supermarketPriceState.superMarketPriceID)
            setItemId(supermarketPriceState.itemId)
            setItemName(supermarketPriceState.itemName)
            setYesterdayPrice(supermarketPriceState.yesterDayPrice)
            setTodayPrice(supermarketPriceState.toDayPrice)
        }
        loadAlProducts();
    }, [supermarketPriceState.selectedSupermarketPrice])

    const addSupermarketPrice = async () => {
        console.log("addSupermarketPrice", ItemId)
        const payload = {
            itemID: ItemId,
            itemName: itemName,
            yesterDayPrice: yesterdayPrice,
            toDayPrice: todayPrice,
        };

        const {errors, isInvalid} = validateSupermarketPrice(payload);

        if (isInvalid) {
            setErrors(errors);
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'error',
                title: 'Please enter your details',
            });
        } else {
            setErrors({})
            await dispatch(add(payload)).then((res) => {
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
                    clearForm();
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
                    text: `${err}`,
                    icon: 'error',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                });
            });
        }

        dispatch(getAll());
    };

    const handleUpdateSubmit = async () => {
        const payload = {
            _id: id,
            superMarketPriceID: superMarketPriceID,
            itemID: ItemId,
            itemName: itemName,
            yesterDayPrice: yesterdayPrice,
            toDayPrice: todayPrice,
        };

        const {errors, isInvalid} = validateSupermarketPrice(payload);

        if (isInvalid) {
            setErrors(errors);
            Swal.fire({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'error',
                title: 'Please enter your details',
            });
        } else {
            setErrors({})
            if (supermarketPriceState.selectedSupermarketPrice.superMarketPriceID) {
                await dispatch(update(payload)).then((res) => {
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
                        clearForm();
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
                        text: `${err}`,
                        icon: 'error',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                    });
                });
                dispatch(getAll());
            }
        }

        dispatch(getAll());
    };

    const clearForm = () => {
        setId('')
        setSuperMarketPriceID('')
        setItemId('')
        setItemName('')
        setYesterdayPrice('')
        setTodayPrice('')
        document.getElementById("superMarketPriceForm").reset();
    }

    const loadAlProducts = () => {
        dispatch(getAllProducts()).then((res) => {
            setProductList(res.payload);
        })
    }

    const getAllProductsNameAndId = () => {
        return productList.map((item) => {
            return (
                <option key={item._id} value={item._id} className="form-control"
                        id="itemNameDropDown">{item.name}</option>
            )
        });
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
                                           placeholder="Item Name" value={searchItemName}
                                           onChange={(e) => {
                                               setSearchItemName(e.target.value)
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
                                    value={ItemId}
                                    onChange={(e) => {
                                        setItemId(e.target.value)
                                        setItemName(e.target.options[e.target.selectedIndex].text)
                                        errors.itemName = ""
                                    }}>
                                <option selected={true} disabled value="">Item</option>
                                {getAllProductsNameAndId()}
                            </select>
                            <small
                                htmlFor="itemName"
                                className="d-block text-danger form-text invalid-feedback"
                            >
                                {errors.itemName}
                            </small>
                        </div>

                        <div className="col-6 d-flex">
                                                   <span style={{"background": "#24353E"}}
                                                         className="input-group-text text-white"
                                                         id="basic-addon1">RS:</span>
                            <input id="yPrice" type="text"
                                   className="form-control"
                                   placeholder="Yesterday Price" name="yprice"
                                   value={yesterdayPrice}
                                   onChange={(e) => {
                                       setYesterdayPrice(e.target.value)
                                       errors.yesterDayPrice = ""
                                   }}/>
                        </div>
                        <div className="col-6 offset-6">
                            <small
                                htmlFor="yPrice"
                                className="d-block text-danger form-text invalid-feedback"
                            >
                                {errors.yesterDayPrice}
                            </small>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-6 d-flex">
                                    <span style={{"background": "#24353E"}}
                                          className="input-group-text d-inline text-white"
                                          id="basic-addon1">RS:</span>
                            <input id="tPrice" type="text"
                                   className="form-control  d-inline"
                                   value={todayPrice}
                                   required
                                   placeholder="Today Price" name="price" onChange={(e) => {
                                setTodayPrice(e.target.value)
                                errors.toDayPrice = ""
                            }}/>
                        </div>
                        <small
                            htmlFor="tPrice"
                            className="d-block text-danger form-text invalid-feedback"
                        >
                            {errors.toDayPrice}
                        </small>
                    </div>
                    <div className="row mt-4">
                        <div className="d-flex justify-content-around align-items-center">
                            <button type="button" className="btn btnAdd" onClick={() => {
                                addSupermarketPrice()
                            }}>Register
                            </button>
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
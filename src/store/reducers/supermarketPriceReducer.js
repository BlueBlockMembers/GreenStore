import {createSlice} from '@reduxjs/toolkit'
import {add, deleteDetails, getAll, search, update} from "../actions/supermarketPriceActions.js";

const initialState = {
    supermarketPrices: [
        {
            superMarketPriceID: "1",
            itemId: "1",
            itemName: "Item 1",
            yesterDayPrice: "0.00",
            toDayPrice: "0.00",
        }
    ],
    supermarketPriceID: "",
}

export const SupermarketPriceSlice = createSlice({
    name: "supermarketPrice",
    initialState,
    reducers: {
        addNewSupermarketPriceDetails: add,
        updateNewSupermarketPriceDetails: update,
        deleteSupermarketPriceDetails: deleteDetails,
        getSupermarketPriceDetailsByID: search,
        getAllSupermarketPriceDetails: getAll
    }
})

export default SupermarketPriceSlice.reducer;


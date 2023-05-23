import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {add, deleteDetails, search, update} from "../actions/supermarketPriceActions.js";
import axios from "axios";

const initialState = {
    supermarketPrices: [{
        superMarketPriceID: "1", itemId: "1", itemName: "Item 1", yesterDayPrice: "0.00", toDayPrice: "0.00",
    }], supermarketPriceID: "", loading: false, error: ''
}

export const getAllSupermarketPriceDetails = createAsyncThunk('supermarketPrice/getAllSupermarketPriceDetails', () => {
    return axios.get('http://localhost:8000/api/marketPlace').then((response) => {
        return response.data.data;
    });
})

export const SupermarketPriceSlice = createSlice({
    name: "supermarketPrice",
    initialState,
    reducers: {
        addNewSupermarketPriceDetails: add,
        updateNewSupermarketPriceDetails: update,
        deleteSupermarketPriceDetails: deleteDetails,
        getSupermarketPriceDetailsByID: search
    },
    extraReducers: (builder) => {
        builder.addCase(getAllSupermarketPriceDetails.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(getAllSupermarketPriceDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.supermarketPrices = action.payload;
            state.error = '';
        })

        builder.addCase(getAllSupermarketPriceDetails.rejected, (state, action) => {
            state.loading = false;
            state.supermarketPrices = [];
            state.error = action.error.message;
        })
    }
})

export const {
    addNewSupermarketPriceDetails,
    updateNewSupermarketPriceDetails,
    deleteSupermarketPriceDetails,
    getSupermarketPriceDetailsByID,
} = SupermarketPriceSlice.actions
export default SupermarketPriceSlice.reducer;


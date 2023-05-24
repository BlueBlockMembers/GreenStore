import {createSlice} from '@reduxjs/toolkit';
import {add, deleteDetails, getAll, search, update} from '../actions/supermarketPriceActions.js';

let initialState = {
    supermarketPrices: [],
    supermarketPriceID: '',
    loading: false,
    error: '',
    selectedSupermarketPrice: {},
    _id: "",
    superMarketPriceID: "",
    itemId: "645b423fc9af1470fb4712fe",
    itemName: "",
    yesterDayPrice: "",
    toDayPrice: "",
    createdAt: "",
    updatedAt: "",
    result: {},
};

export const supermarketPriceSlice = createSlice({
    name: 'supermarketPrice', initialState, reducers: {}, extraReducers: (builder) => {

        //add supermarketPrice
        builder.addCase(add.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(add.fulfilled, (state, action) => {
            state.loading = false;
            state.supermarketPrices = action.payload;
            state.error = '';
        })

        builder.addCase(add.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        //update supermarketPrice
        // builder.addCase(update.pending, (state) => {
        //     state.loading = true;
        // })

        builder.addCase(update.fulfilled, (state, action) => {
            state.loading = false;
            state.result = action.payload;
            state.error = '';
        })
        //
        // builder.addCase(update.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.error.message;
        // })

        //delete supermarketPrice
        builder.addCase(deleteDetails.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(deleteDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.supermarketPrices = action.payload;
            state.error = '';
        })

        builder.addCase(deleteDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        //get all by id supermarketPrice
        // builder.addCase(search.pending, (state) => {
        //     state.loading = true;
        // })

        builder.addCase(search.fulfilled, (state, action) => {
            state.loading = false;
            state._id = action.payload._id;
            state.superMarketPriceID = action.payload._id;
            state.itemId = action.payload.itemId;
            state.itemName = action.payload.itemName;
            state.yesterDayPrice = action.payload.yesterDayPrice;
            state.toDayPrice = action.payload.toDayPrice;
            state.createdAt = action.payload.createdAt;
            state.updatedAt = action.payload.updatedAt;
            state.selectedSupermarketPrice = action.payload;
            state.error = '';
        })

        // builder.addCase(search.rejected, (state, action) => {
        //     state.loading = false;
        //     state.selectedSupermarketPrice = {};
        //     state.error = action.error.message;
        // });

        //get all supermarketPrice
        builder.addCase(getAll.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(getAll.fulfilled, (state, action) => {
            state.loading = false;
            state.supermarketPrices = action.payload;
            state.error = '';
        })

        builder.addCase(getAll.rejected, (state, action) => {
            state.loading = false;
            state.supermarketPrices = [];
            state.error = action.error.message;
        })
    },
});

export default supermarketPriceSlice.reducer;

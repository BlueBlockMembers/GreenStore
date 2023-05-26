import {createSlice} from "@reduxjs/toolkit";
import {getProductIdAndName} from './../actions/productsActions'

let initialState = {
    products: [],
    productNameList: [],
    productId: '',
    loading: false,
    error: '',
    selectedProduct: {},
    _id: "",
    name: "",
    description: "",
    quantity: "",
    price: "",
    image: "",
    result: {},
};

export const productSlice = createSlice({
    name: 'products', initialState, reducers: {}, extraReducers: (builder) => {
        builder.addCase(getProductIdAndName.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getProductIdAndName.fulfilled, (state, action) => {
            state.loading = false;
            state.productNameList = action.payload;
            state.error = '';
        })
        builder.addCase(getProductIdAndName.rejected, (state, action) => {
            state.loading = false;
            state.productNameList = [];
            state.error = action.error.message;
        })
    }
});
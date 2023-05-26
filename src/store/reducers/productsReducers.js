import {createSlice} from "@reduxjs/toolkit";
import {getAllProducts} from './../actions/productsActions'

let initialState = {
    productList: [],
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
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.productList = action.payload;
            state.error = '';
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.productList = [];
            state.error = action.error.message;
        })
    }
});


export default productSlice.reducer;
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getProductIdAndName = createAsyncThunk('products/getProductIdAndName', async () => {
    const response = await axios.get('http://localhost:8000/api/product/getProductIdAndName');
    //return product id and name from response array
    return response.data.data.map((product) => {
        return {id: product.itemID, name: product.itemName}
    });
})
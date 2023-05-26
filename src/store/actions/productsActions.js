import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getAllProducts = createAsyncThunk('products/getProductIdAndName', async () => {
    const response = await axios.get('http://localhost:8000/api/product/');
    //return product id and name from response array
    console.log(response.data);
    return response.data;
});
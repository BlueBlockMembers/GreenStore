import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const add = createAsyncThunk(
    'SupermarketPrice/addNewSupermarketPriceDetails', async (equipment, thunkAPI) => {
        const response = await axios.post('http://localhost:8000/api/marketPlace', equipment);
        return response.data;
    });

export const update = createAsyncThunk(
    'SupermarketPrice/updateNewSupermarketPriceDetails', async (equipment, thunkAPI) => {
        const response = await axios.put('http://localhost:8000/api/marketPlace', equipment);
        return response.data;
    });

export const deleteDetails = createAsyncThunk(
    'SupermarketPrice/deleteSupermarketPriceDetails', async (equipment, thunkAPI) => {
        const response = await axios.delete('http://localhost:8000/api/marketPlace', equipment);
        return response.data;
    });

export const search = createAsyncThunk(
    'SupermarketPrice/getSupermarketPriceDetailsByID', async (equipment, thunkAPI) => {
        const response = await axios.get('http://localhost:8000//api/marketPlace', equipment);
        return response.data;
    });

export const getAll = createAsyncThunk(
    'SupermarketPrice/getAllSupermarketPriceDetails', async (equipment, thunkAPI) => {
        const response = await axios.get('http://localhost:8000/api/marketPlace');
        return response.data;
    });
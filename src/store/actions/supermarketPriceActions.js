import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const add = createAsyncThunk(
    'supermarketPrice/addNewSupermarketPriceDetails', async (equipment, thunkAPI) => {
        const response = await axios.post('http://localhost:8000/api/marketPlace', equipment);
        return response.data;
    });

export const update = createAsyncThunk(
    'supermarketPrice/updateNewSupermarketPriceDetails', async (equipment, thunkAPI) => {
        const response = await axios.put('http://localhost:8000/api/marketPlace', equipment);
        return response.data;
    });

export const deleteDetails = createAsyncThunk(
    'supermarketPrice/deleteSupermarketPriceDetails', async (equipment, thunkAPI) => {
        const response = await axios.delete('http://localhost:8000/api/marketPlace', equipment);
        return response.data;
    });

export const search = createAsyncThunk(
    'supermarketPrice/getSupermarketPriceDetailsByID', async (equipment, thunkAPI) => {
        const response = await axios.get('http://localhost:8000//api/marketPlace', equipment);
        return response.data;
    });

export const getAll = createAsyncThunk(
    'supermarketPrice/getAllSupermarketPriceDetails', async (equipment, thunkAPI) => {
        const response = await axios.get('http://localhost:8000/api/marketPlace');
        return response.data;
    });
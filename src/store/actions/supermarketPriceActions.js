import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const add = createAsyncThunk('supermarketPrice/add', async (payload) => {
    const response = await axios.post('http://localhost:8000/api/marketPlace', payload);
    return response.data.data;
});

export const update = createAsyncThunk('supermarketPrice/update', async (payload) => {
    const response = await axios.put(`http://localhost:8000/api/marketPlace/${payload.id}`, payload);
    return response.data.data;
});

export const deleteDetails = createAsyncThunk('supermarketPrice/deleteDetails', async (payload) => {
    const response = await axios.delete(`http://localhost:8000/api/marketPlace/${payload}`);
    return response.data.data;
});

export const search = createAsyncThunk('supermarketPrice/search', async (payload) => {
    const response = await axios.get(`http://localhost:8000/api/marketPlace/get/${payload}`);
    return response.data.data;
});

export const getAll = createAsyncThunk('supermarketPrice/getAll', async () => {
    const response = await axios.get('http://localhost:8000/api/marketPlace');
    return response.data.data;
});
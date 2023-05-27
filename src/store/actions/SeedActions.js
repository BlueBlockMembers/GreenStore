import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addSeed = createAsyncThunk("seed/add", async (payload) => {
  const response = await axios.post(
    "http://localhost:8000/api/seeds/addSeed",
    payload
  );
  return response.data;
});

export const updateSeed = createAsyncThunk("seed/update", async (payload) => {
  const response = await axios.put(
    `http://localhost:8000/api/seeds/updateSeed/${payload.id}`,
    payload
  );
  return response.data;
});

export const deleteSeed = createAsyncThunk(
  "seed/deleteDetails",
  async (payload) => {
    const response = await axios.delete(
      `http://localhost:8000/api/seeds/deleteSeed/${payload}`
    );
    return response.data;
  }
);
export const getSeed = createAsyncThunk("seed/getAll", async () => {
  const response = await axios.get("http://localhost:8000/api/seeds/getSeed");
  return response.data.data;
});

export const getOneSeed = createAsyncThunk("seed/getOne", async (payload) => {
  const response = await axios.get(
    `http://localhost:8000/api/seeds/getOneSeed/${payload}`
  );
  return response.data.data;
});

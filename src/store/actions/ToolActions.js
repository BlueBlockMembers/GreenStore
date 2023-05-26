import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addTool = createAsyncThunk("tool/add", async (payload) => {
  const response = await axios.post(
    "http://localhost:8000/api/tools/addTool",
    payload
  );
  return response.data;
});

export const updateTool = createAsyncThunk("tool/update", async (payload) => {
  const response = await axios.put(
    `http://localhost:8000/api/tools/updateTool/${payload.id}`,
    payload
  );
  return response.data;
});

export const deleteTool = createAsyncThunk(
  "tool/deleteDetails",
  async (payload) => {
    const response = await axios.delete(
      `http://localhost:8000/api/tools/deleteTool/${payload}`
    );
    return response.data;
  }
);
export const getTool = createAsyncThunk("tool/getAll", async () => {
  const response = await axios.get("http://localhost:8000/api/tools/getTool");
  return response.data.data;
});

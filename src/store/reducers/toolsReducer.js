import { createSlice } from "@reduxjs/toolkit";
import {
  addTool,
  updateTool,
  deleteTool,
  getTool,
} from "../actions/ToolActions";

let initialState = {
  tools: [],
  id: "",
  name: "",
  description: "",
  price: "",
  image: "",
  loading: false,
  error: "",
  result: "",
};

export const toolSlice = createSlice({
  name: "Tools",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //add Tool
    builder.addCase(addTool.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addTool.fulfilled, (state, action) => {
      state.loading = false;
      state.tools = action.payload;
      state.error = "";
    });

    builder.addCase(addTool.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //update Tool
    builder.addCase(updateTool.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload;
      state.error = "";
    });

    //delete Tool
    builder.addCase(deleteTool.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteTool.fulfilled, (state, action) => {
      state.loading = false;
      state.supermarketPrices = action.payload;
      state.error = "";
    });

    builder.addCase(deleteTool.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //get all tools
    builder.addCase(getTool.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getTool.fulfilled, (state, action) => {
      state.loading = false;
      state.tools = action.payload;
      state.error = "";
    });

    builder.addCase(getTool.rejected, (state, action) => {
      state.loading = false;
      state.tools = [];
      state.error = action.error.message;
    });
  },
});

export default toolSlice.reducer;

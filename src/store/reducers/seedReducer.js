import { createSlice } from "@reduxjs/toolkit";
import {
  addSeed,
  updateSeed,
  deleteSeed,
  getSeed,
  getOneSeed,
} from "../actions/SeedActions";

let initialState = {
  seeds: [],
  id: "",
  name: "",
  description: "",
  price: "",
  image: "",
  loading: false,
  error: "",
  result: "",
  selectedSeedList: {},
};

export const seedSlice = createSlice({
  name: "Seeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //add Seed
    builder.addCase(addSeed.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addSeed.fulfilled, (state, action) => {
      state.loading = false;
      state.seeds = action.payload;
      state.error = "";
    });

    builder.addCase(addSeed.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //update Seed
    builder.addCase(updateSeed.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload;
      state.error = "";
    });

    //delete Seed
    builder.addCase(deleteSeed.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteSeed.fulfilled, (state, action) => {
      state.loading = false;
      state.seeds = action.payload;
      state.error = "";
    });

    builder.addCase(deleteSeed.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //get all Seed
    builder.addCase(getSeed.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getSeed.fulfilled, (state, action) => {
      state.loading = false;
      state.seeds = action.payload;
      state.error = "";
    });

    builder.addCase(getSeed.rejected, (state, action) => {
      state.loading = false;
      state.seeds = [];
      state.error = action.error.message;
    });

    builder.addCase(getOneSeed.fulfilled, (state, action) => {
      state.loading = false;
      state.id = action.payload.id;
      state.itemName = action.payload.name;
      state.price = action.payload.price;
      state.description = action.payload.description;
      state.selectedSeedList = action.payload;
      state.image = action.payload.image;
      state.error = "";
    });
  },
});

export default seedSlice.reducer;

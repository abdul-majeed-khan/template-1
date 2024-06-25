import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: null,
  propertyStatus: null,
  price: [2500, 8500],
  area: [2500, 8500],
};

const inputsReducer = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    propertyStatus: (state, action) => {
      state.propertyStatus = action.payload;
    },
    propertyType: (state, action) => {
      state.propertyType = action.payload;
    },
    maxRooms: (state, action) => {
      state.maxRooms = action.payload;
    },
    bed: (state, action) => {
      state.bed = action.payload;
    },
    bath: (state, action) => {
      state.bath = action.payload;
    },
    agencies: (state, action) => {
      state.agencies = action.payload;
    },
    setPrice: (state, action) => {
      action.payload ? (state.price = [...action.payload]) : state.price.splice(0, state.price.length);
    },
    setArea: (state, action) => {
      action.payload ? (state.area = [...action.payload]) : state.area.splice(0, state.area.length);
    },
    sortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    clearFilter: (state, action) => {
      return { ...state, [action.payload]: null };
    },
  },
});

export const { propertyStatus, propertyType, maxRooms, bed, bath, agencies, setPrice, setArea, sortBy, clearFilter} = inputsReducer.actions;
export default inputsReducer.reducer;

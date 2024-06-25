import { createReducer } from "@reduxjs/toolkit";

const initialState = { gridSize: "2", gridStyle: "" };

export const gridReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("setGridSize", (state, action) => {
      state.gridSize = action.payload;
    })
    .addCase("setGridStyle", (state, action) => {
      state.gridStyle = action.payload;
    });
});

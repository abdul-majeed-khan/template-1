import { createReducer } from "@reduxjs/toolkit";

const initialState = { compareProducts: [] };

export const addToCompareReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("defineCompareProducts", (state, action) => {
      state.compareProducts = action.payload;
    })
    .addCase("addCompareProducts", (state, action) => {
      if (!state.compareProducts.includes(action.payload)) {
        state.compareProducts.push(action.payload);
      }
    })
    .addCase("removeCompareProducts", (state, action) => {
      const index = state.compareProducts.indexOf(action.payload);
      if (index > -1) {
        state.compareProducts.splice(index, 1);
      }
    });
});

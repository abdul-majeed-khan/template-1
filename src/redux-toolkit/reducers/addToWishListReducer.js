import { createReducer } from "@reduxjs/toolkit";

const initialState = { likedProducts: [] };

export const addToWishListReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("defineLikedProducts", (state, action) => {
      state.likedProducts = action.payload;
    })
    .addCase("like", (state, action) => {
      if (!state.likedProducts.includes(action.payload)) {
        state.likedProducts.push(action.payload);
      }
    })
    .addCase("unlike", (state, action) => {
      const index = state.likedProducts.indexOf(action.payload);
      if (index > -1) {
        state.likedProducts.splice(index, 1);
      }
    });
});

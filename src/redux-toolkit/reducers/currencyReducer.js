import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  currency: "USD",
  name: "dollar",
  symbol: "$",
  currencyValue: 1,
};

export const currencyReducer = createReducer(initialState, (builder) => {
  builder.addCase("currencyChange", (state, action) => {
    const { currency, name, symbol, value } = action.payload;
    state.currency = currency;
    state.name = name;
    state.symbol = symbol;
    state.currencyValue = value;
  });
});

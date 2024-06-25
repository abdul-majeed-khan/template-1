"use client";
import { store } from "@/redux-toolkit/store";
import React, { Fragment } from "react";
import { Provider } from "react-redux";

const MainProvider = ({ children }) => {
  return (
    <Fragment>
      <Provider store={store}>{children}</Provider>
    </Fragment>
  );
};

export default MainProvider;

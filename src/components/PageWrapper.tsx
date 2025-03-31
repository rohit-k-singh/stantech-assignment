"use client";
import React, { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "@/src/store";
import Navbar from "./Navbar";

type Props = {};

const PageWrapper: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <Provider store={store}>
      <Navbar />
      {children}
    </Provider>
  );
};

export default PageWrapper;

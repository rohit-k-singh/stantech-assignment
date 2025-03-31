"use client";
import React, { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "@/src/store";
import Navbar from "./Navbar";

type Props = {
  isDetailsPage?: boolean;
};

const PageWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  isDetailsPage,
}) => {
  return (
    <Provider store={store}>
      <Navbar isDetailsPage={isDetailsPage} />
      {children}
    </Provider>
  );
};

export default PageWrapper;

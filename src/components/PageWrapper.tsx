"use client";
import React, { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "@/src/store";

type Props = {};

const PageWrapper: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default PageWrapper;

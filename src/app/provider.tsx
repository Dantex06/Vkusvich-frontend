"use client";

import { ReactNode } from "react";

import { Provider } from "react-redux";
import { store } from "@/entities/store";

export const ProviderLayout = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

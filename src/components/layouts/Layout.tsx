import React from "react";
import { StatusBar } from "./StatusBar";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <StatusBar />
      <main>{children}</main>
    </div>
  );
};
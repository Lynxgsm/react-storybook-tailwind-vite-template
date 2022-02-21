import React from "react";
import Navbar from "../components/Navbar";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

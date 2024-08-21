import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className=" bg-gray-900 flex flex-col justify-between min-h-screen p-8">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

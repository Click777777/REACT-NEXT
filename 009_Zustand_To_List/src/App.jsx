import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className=" flex flex-col justify-between min-h-screen bg-gray-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;

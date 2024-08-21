/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

const Header = () => {
  return (
    <header>
      <div className=" flex justify-between capitalize text-primary">
        <h1 className=" text-3xl font-bold">
          <Link to="/" className="leading-relaxed tracking-wide">
            online shop
          </Link>
        </h1>

        <div className=" relative group">
          <NavLink
            to="product-cart"
            className="inline-block rounded border border-current px-8 py-3 text-sm font-medium  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
            href="product-cart"
          >
            my cart
          </NavLink>
          <p className="flex justify-center items-center text-white rounded-full size-6 text-sm bg-primary transition group-hover:scale-110 group-hover:shadow-xl group-hover:text-base absolute top-0 right-0 translate-x-1/2 -translate-y-1/2  ">
            1
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

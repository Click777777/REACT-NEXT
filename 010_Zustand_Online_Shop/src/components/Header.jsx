/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import { useCartStore } from "../store/useCartStore";

const Header = () => {
  const { carts } = useCartStore();

  return (
    <header>
      <div className=" flex justify-between capitalize text-primary">
        <h1 className=" text-2xl sm:text-3xl font-bold">
          <Link to="/" className="leading-relaxed tracking-wide">
            online shop
          </Link>
        </h1>

        <div className=" relative group">
          <Link
            to="/product-cart"
            className="inline-block rounded border border-current p-3 sm:px-8 sm:py-3 text-sm font-medium  transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
            href="product-cart"
          >
            my cart
          </Link>
          {carts.length > 0 && (
            <p className="flex justify-center items-center text-white rounded-full size-6 text-sm bg-primary transition group-hover:scale-110 group-hover:shadow-xl group-hover:text-base absolute top-0 right-0 translate-x-1/2 -translate-y-1/2  ">
              {carts.length}
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

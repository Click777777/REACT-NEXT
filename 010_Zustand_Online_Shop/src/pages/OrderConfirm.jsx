import React from "react";
import { Link } from "react-router-dom";

const OrderConfirm = () => {
  return (
    <div className=" grid min-h-screen place-content-center bg-black text-white px-4">
      <div className="text-center flex flex-col gap-4">
        <h1 className="mt-6 capitalize text-2xl font-bold tracking-tight text-primary sm:text-4xl">
          order confirmation
        </h1>

        <p className="mt-4 text-primary">
          Thank you for shopping ! We're thrilled to confirm your order, and we
          wanted to share the details with you.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mt-8">
          <div>
            <Link
              className="inline-block rounded border border-current px-6 py-2 text-sm font-medium text-primary transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
              to="/product-cart"
            >
              <p className=" bg-black sm:p-3 sm:px-6 rounded-md capitalize">
                back to cart
              </p>
            </Link>
          </div>
          <div>
            <Link
              className="inline-block rounded border border-current px-6 py-2 text-sm font-medium text-primary transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
              to="/"
            >
              <p className=" bg-black sm:p-3 sm:px-6 rounded-md capitalize">
                confirm
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;

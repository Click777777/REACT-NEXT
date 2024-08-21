import React from "react";
import { useCartStore } from "../store/useCartStore";
import MyCart from "../components/MyCart";
import TotalCost from "../components/TotalCost";

const ProductCart = () => {
  const { carts } = useCartStore();

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-semibold sm:text-2xl capitalize">
              the items you added in your cart
            </h1>
          </header>
          <div className="mt-8 flex flex-col gap-6 ">
            {carts.length === 0 ? (
              <div className=" p-10 capitalize text-xl font-semibold text-center">
                empty item
              </div>
            ) : (
              <>
                {carts.map((ele) => (
                  <MyCart key={ele.id} cart={ele} />
                ))}
                <TotalCost />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCart;

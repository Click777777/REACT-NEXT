import React, { useState } from "react";
import { useProductStore } from "../store/useProductStore";
import { useCartStore } from "../store/useCartStore";
import Swal from "sweetalert2";

const MyCart = ({ cart: { id, product_id, quantity } }) => {
  const { data_prodcuts } = useProductStore();
  const { minus, plus, remove } = useCartStore();

  const product = data_prodcuts.find((ele) => ele.id === product_id);

  const handleDecrease = () => {
    if (quantity > 1) {
      minus(id);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        iconColor: "#000100",
        color: "#000100",
        background: "#34e1d3",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
            iconColor: "#000100",
            color: "#000100",
            background: "#34e1d3",
          });
          remove(id);
        }
      });
    }
  };

  const handleQuantity = (e) => {};

  const handleIncrease = () => {
    plus(id);
  };

  const handleRemove = () => {
    remove(id);
  };

  const total_for_one_price = quantity * product.price;

  return (
    <>
      <ul className="space-y-4 py-6 border-t border-gray-700">
        <li className="flex items-center gap-4 flex-col sm:flex-row ">
          <img
            src={product?.image}
            alt={product?.title}
            className="size-16 rounded object-cover"
          />

          <div>
            <h3 className="text-sm">{product?.title}</h3>

            <dl className="mt-0.5 space-y-px text-[10px] text-primary/85">
              <div>
                <dt className="inline">Price : </dt>
                <dd className="inline">{product?.price}</dd>
              </div>

              <div>
                <dt className="inline">Rating : </dt>
                <dd className="inline">{product?.rating.rate}</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-1 items-center justify-center sm:justify-end gap-2 sm:gap-8 ">
            <form>
              <div>
                <label htmlFor="Quantity" className="sr-only">
                  Quantity
                </label>

                <div className="flex items-center gap-1">
                  <button
                    onClick={handleDecrease}
                    type="button"
                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75 flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>

                  <input
                    type="number"
                    id="Quantity"
                    value={quantity}
                    onChange={handleQuantity}
                    className="h-8 w-12 text-black rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />

                  <button
                    onClick={handleIncrease}
                    type="button"
                    className="size-10 leading-10 text-gray-600 transition hover:opacity-75 flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            <div className=" flex gap-4">
              <div className="min-w-fit">
                $ {total_for_one_price.toFixed(2)}
              </div>
              <button
                onClick={handleRemove}
                className="text-primary/85 transition hover:text-red-600"
              >
                <span className="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default MyCart;

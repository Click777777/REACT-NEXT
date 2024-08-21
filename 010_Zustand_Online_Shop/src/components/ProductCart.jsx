import React from "react";
import StarRating from "./StarRating";
import { useCartStore } from "../store/useCartStore";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ProductCart = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
    slug,
  },
}) => {
  const navigate = useNavigate();
  const { carts, addCart } = useCartStore();
  const cartItem = carts.find((ele) => ele.product_id === id);
  const handleOpenDetails = () => {
    navigate(`/product-details/${slug}`);
  };
  const handleAddCart = (e) => {
    e.stopPropagation();
    const newCart = {
      id: Date.now(),
      product_id: id,
      quantity: 1,
    };
    addCart(newCart);
    toast.success("Successfully Added!");
  };
  const handleAdded = (e) => {
    e.stopPropagation();
    toast.error("Item is already in Your Cart");
  };

  return (
    <div
      onClick={handleOpenDetails}
      className="text-primary border cursor-pointer border-primary h-full p-6 rounded-sm flex flex-col gap-2 items-start"
    >
      <img src={image} alt={id} className="h-40 w-auto" />
      <h4 className="w-full">{title}</h4>
      <StarRating rate={rate} />
      <div className="flex justify-between w-full items-center">
        <p className="capitalize">price ( $ {price} )</p>
        {cartItem ? (
          <>
            <button
              onClick={handleAdded}
              className={`text-nowrap text-primary bg-bg_main inline-block rounded border border-current px-6 py-2 text-sm font-medium transition hover:rotate-2 hover:scale-110 focus:outline-none active:text-primary`}
            >
              <div className="capitalize">added</div>
            </button>
            <Toaster
              toastOptions={{
                style: {
                  color: "#000000",
                },
                success: {
                  style: {
                    background: "#34e1d3",
                  },
                },
                error: {
                  style: {
                    background: "#34e1d3",
                  },
                },
              }}
            />
          </>
        ) : (
          <>
            <button
              onClick={handleAddCart}
              className={`text-nowrap text-primary bg-bg_main inline-block rounded border border-current px-6 py-2 text-sm font-medium transition hover:rotate-2 hover:scale-110 focus:outline-none active:text-primary`}
            >
              <div className="capitalize">add cart</div>
            </button>
            <Toaster
              toastOptions={{
                style: {
                  color: "#000000",
                },
                success: {
                  style: {
                    background: "#34e1d3",
                  },
                },
                error: {
                  style: {
                    background: "#34e1d3",
                  },
                },
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCart;

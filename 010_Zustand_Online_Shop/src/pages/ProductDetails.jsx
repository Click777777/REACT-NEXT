import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import StarRating from "../components/StarRating";
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import toast, { Toaster } from "react-hot-toast";
import { useCartStore } from "../store/useCartStore";

const ProductDetails = () => {
  const { data_prodcuts } = useProductStore();
  const { carts, addCart } = useCartStore();
  const { slug } = useParams();

  const filteredProduct = data_prodcuts.filter(
    (product) => product.slug === slug
  );

  const id = filteredProduct.map((product) => product.id)[0];
  const handleAddCart = (e) => {
    const newCart = {
      id: Date.now(),
      product_id: id,
      quantity: 1,
    };
    addCart(newCart);
    toast.success("Successfully Added!");
  };

  const handleAdded = (e) => {
    toast.error("Item is already in Your Cart");
  };

  const isProductAlreadyExist = carts.find(
    ({ product_id }) => product_id == filteredProduct[0].id
  );

  return (
    <div className=" text-primary">
      <Breadcrumb where=" Product-Details" />

      {filteredProduct.map((product) => (
        <div
          key={product.id}
          className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-20"
        >
          <div className=" col-span-1">
            <div className=" flex flex-col gap-3 grow items-start sm:items-center">
              <img src={product.image} alt={product.image} className=" w-2/4" />
              <div className=" flex gap-6 justify-start sm:justify-center">
                <img
                  src={product.image}
                  alt={product.image}
                  className="w-1/6"
                />
                <img
                  src={product.image}
                  alt={product.image}
                  className="w-1/6"
                />
                <img
                  src={product.image}
                  alt={product.image}
                  className="w-1/6"
                />
              </div>
            </div>
          </div>

          <div className=" col-span-1">
            <div className=" flex flex-col gap-3 sm:gap-6">
              <h1 className=" font-bold text-lg sm:text-3xl font-serif">
                {product.title}
              </h1>
              <p className="  text-xs capitalize border border-primary p-2 rounded-sm bg-primary text-black max-w-fit">
                {product.category}
              </p>
              <p className=" text-sm leading-relaxed tracking-wide">
                {product.description}
              </p>
              <StarRating rate={product.rating.rate} />
              <div className=" flex justify-between items-center">
                <p className=" capitalize text-base">
                  price ( $ {product.price} )
                </p>

                {isProductAlreadyExist ? (
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;

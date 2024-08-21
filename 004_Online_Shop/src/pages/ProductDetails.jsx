import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import StarRating from "../components/StarRating";
import Btn from "../components/Btn";
import data_prodcuts from "../data/data_product";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { product_id } = useParams();
  const filteredProduct = data_prodcuts.filter(
    (product) => product.id === Number(product_id)
  );
  console.log(filteredProduct);
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
                <Btn btn_name="add cart" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;

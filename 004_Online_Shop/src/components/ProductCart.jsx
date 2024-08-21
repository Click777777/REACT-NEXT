import React from "react";
import StarRating from "./StarRating";
import Btn from "./Btn";

const ProductCart = ({
  product: {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate },
    rating: { count },
  },
}) => {
  return (
    <div className="text-primary border border-primary h-full p-6 rounded-sm flex flex-col gap-2 items-start">
      <img src={image} alt={id} className="h-40 w-auto" />
      <h4 className="w-full">{title}</h4>
      <StarRating rate={rate} />
      <div className="flex justify-between w-full items-center">
        <p className="capitalize">price ( $ {price} )</p>
        <Btn btn_name="add cart" />
      </div>
    </div>
  );
};

export default ProductCart;

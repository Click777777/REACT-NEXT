import React from "react";
import ProductCart from "./ProductCart";
import data_prodcuts from "../data/data_product";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="py-8 ">
      <p className="text-primary capitalize mb-6 text-lg leading-relaxed tracking-wide">
        available product lists
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data_prodcuts.map((product) => (
          <Link
            to={`product-details/${product.id}`}
            key={product.id}
            className=" col-span-1"
          >
            <ProductCart product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

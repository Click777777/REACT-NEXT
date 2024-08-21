import React from "react";
import ProductCart from "./ProductCart";
import { useProductStore } from "../store/useProductStore";
import { useCategoryStore } from "../store/useCategoryStore";

const ProductList = () => {
  const { data_prodcuts } = useProductStore();
  const { data_categories } = useCategoryStore();

  const activeCategory = data_categories.find((ele) => ele.isActive === true);

  return (
    <div className="py-8 ">
      <p className="text-primary capitalize mb-6 text-lg leading-relaxed tracking-wide">
        available product lists
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data_prodcuts
          .filter(
            (ele) =>
              activeCategory.name === "All" ||
              ele.category === activeCategory.name
          )
          .map((product) => (
            <div key={product.id} className=" col-span-1">
              <ProductCart product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;

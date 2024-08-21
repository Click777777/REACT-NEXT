import React from "react";
import Btn from "./Btn";
import data_categories from "../data/data_categories";

const Categories = () => {
  return (
    <div className="py-8 ">
      <p className="text-primary capitalize mb-6 text-lg leading-relaxed tracking-wide">
        product categories
      </p>

      {/* loop btn */}
      <div className="flex gap-4 overflow-scroll no-scrollbar">
        {data_categories.map((category) => (
          <Btn key={category} btn_name={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;

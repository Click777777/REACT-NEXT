import React from "react";
import Btn from "./Btn";
import { useCategoryStore } from "../store/useCategoryStore";

const Categories = () => {
  const { data_categories } = useCategoryStore();

  return (
    <div className="py-8 ">
      <p className="text-primary capitalize mb-6 text-lg leading-relaxed tracking-wide">
        product categories
      </p>

      {/* loop btn */}
      <div className="flex gap-4 overflow-scroll no-scrollbar">
        {data_categories.map((category) => (
          <Btn
            key={category.id}
            btn_name={category.name}
            id={category.id}
            isActive={category.isActive}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;

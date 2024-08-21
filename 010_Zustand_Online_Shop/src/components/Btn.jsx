import React from "react";
import { useCategoryStore } from "../store/useCategoryStore";

const Btn = ({ btn_name, id, isActive }) => {
  const { active_Category } = useCategoryStore();

  const handleCategory = () => {
    active_Category(id);
  };

  return (
    <button
      className={`${
        isActive ? "bg-primary text-bg_main" : "text-primary bg-bg_main"
      } text-nowrap inline-block rounded border border-current px-6 py-2 text-sm font-medium  transition hover:rotate-2 hover:scale-110 focus:outline-none active:text-primary`}
      onClick={handleCategory}
    >
      <div className="capitalize">{btn_name}</div>
    </button>
  );
};

export default Btn;

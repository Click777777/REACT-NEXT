import { create } from "zustand";
import data_categories from "../data/data_categories";

export const useCategoryStore = create((set) => ({
  data_categories: data_categories,
  active_Category: (id) =>
    set((state) => ({
      data_categories: state.data_categories.map((ele) =>
        ele.id === id ? { ...ele, isActive: true } : { ...ele, isActive: false }
      ),
    })),
}));

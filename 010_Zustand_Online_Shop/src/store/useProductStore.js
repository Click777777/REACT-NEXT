import { create } from "zustand";
import data_prodcuts from "../data/data_product";

export const useProductStore = create((set) => ({
  data_prodcuts: data_prodcuts,
}));

import { create } from "zustand";
import { cart_data } from "../data/cart_data";

export const useCartStore = create((set) => ({
  carts: cart_data,

  addCart: (newCart) => set((state) => ({ carts: [...state.carts, newCart] })),
  minus: (coming_id) =>
    set((state) => ({
      carts: state.carts.map((ele) =>
        ele.id === coming_id ? { ...ele, quantity: ele.quantity - 1 } : ele
      ),
    })),
  plus: (coming_id) =>
    set((state) => ({
      carts: state.carts.map((ele) =>
        ele.id === coming_id ? { ...ele, quantity: ele.quantity + 1 } : ele
      ),
    })),
  remove: (coming_id) =>
    set((state) => ({
      carts: state.carts.filter((ele) => ele.id !== coming_id),
    })),
}));

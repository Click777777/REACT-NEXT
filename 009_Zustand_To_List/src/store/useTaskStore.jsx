import { create } from "zustand";
import todo_data from "../data/todo_data";

export const useTaskStore = create((set) => ({
  renderData: todo_data,
  addList: (para) => {
    set((state) => ({ renderData: [...state.renderData, para] }));
  },
  doneList: (id) => {
    set((state) => ({
      renderData: state.renderData.map((ele) =>
        ele.id === id ? { ...ele, finish: !ele.finish } : ele
      ),
    }));
  },
  deleteList: (id) => {
    set((state) => ({
      renderData: state.renderData.filter((ele) => ele.id !== id),
    }));
  },
}));

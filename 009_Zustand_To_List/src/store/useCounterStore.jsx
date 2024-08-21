import { create } from "zustand";

export const useCounterStore = create(function (set) {
  return {
    count: 4,
    minusCount: function () {
      return set(function (state) {
        return {
          count: state.count - 1,
        };
      });
    },
    resetCount: function () {
      return set({ count: 0 });
    },
    addCount: function () {
      return set(function (state) {
        return {
          count: state.count + 1,
        };
      });
    },
  };
});

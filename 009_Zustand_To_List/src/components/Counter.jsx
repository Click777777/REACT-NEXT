import React from "react";
import { useCounterStore } from "../store/useCounterStore";

const Counter = () => {
  console.log(useCounterStore());
  const { count, minusCount, resetCount, addCount } = useCounterStore();

  const hadleMinusCount = () => {
    minusCount();
  };

  const hadleResetCount = () => {
    resetCount();
  };

  const hadleAddCount = () => {
    addCount();
  };

  return (
    <div className=" text-white">
      <div className=" flex justify-center items-center flex-col">
        <h1 className="text-8xl font-bold my-8 ">{count}</h1>
        <div className=" flex gap-3">
          <button
            onClick={hadleMinusCount}
            className=" text-3xl font-bold px-5 py-1 bg-white text-black rounded-md"
          >
            -
          </button>
          <button
            onClick={hadleResetCount}
            className=" text-xl font-bold px-5 py-1 bg-btn_error rounded-md"
          >
            reset
          </button>
          <button
            onClick={hadleAddCount}
            className=" text-3xl font-bold px-5 py-1 bg-btn_success rounded-md"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

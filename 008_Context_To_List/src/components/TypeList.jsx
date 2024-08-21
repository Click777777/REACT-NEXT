import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const TypeList = () => {
  const { addList } = useContext(GlobalContext);
  const [list, setList] = useState("");

  const handleList = (e) => {
    setList(e.target.value);
  };

  const handleCreateList = () => {
    const newList = {
      id: Date.now(),
      todo: list,
      finish: false,
    };
    addList(newList);
    setList("");
  };

  return (
    <div className=" flex flex-col gap-4 mb-12">
      <label
        htmlFor="List"
        className="relative mb-4 block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 dark:border-gray-700"
      >
        <input
          value={list}
          onChange={handleList}
          type="text"
          id="List"
          placeholder="text"
          className="peer text-white h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
        />

        <span className="capitalize absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200">
          type your list
        </span>
      </label>

      <button
        onClick={handleCreateList}
        type="button"
        className=" text-black capitalize font-semibold text-base font-serif rounded-sm py-2 tracking-wide px-3 bg-white/95"
      >
        add
      </button>
    </div>
  );
};

export default TypeList;

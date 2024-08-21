import { createContext, useState } from "react";
import todo_data from "../data/todo_data";

// Context
export const GlobalContext = createContext();

// Provider
export const GlobalProvider = ({ children }) => {
  // Global State
  const [renderData, setRenderData] = useState(todo_data);

  // All Todo Fun
  const addList = (para) => {
    setRenderData([...renderData, para]);
  };

  const doneList = (id) => {
    setRenderData(
      renderData.map((ele) =>
        ele.id === id ? { ...ele, finish: !ele.finish } : ele
      )
    );
  };

  const deleteList = (id) => {
    setRenderData(renderData.filter((ele) => ele.id !== id));
  };

  return (
    <GlobalContext.Provider
      value={{ addList, doneList, deleteList, renderData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

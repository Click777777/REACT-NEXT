import React, { useState } from "react";
import TypeList from "../components/TypeList";
import RenderList from "../components/RenderList";
import todo_data from "../data/todo_data";
import AlertTodo from "../components/AlertTodo";
import ListTitle from "../components/ListTitle";

const Home = () => {
  const [renderData, setRenderData] = useState(todo_data);
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
    <div className=" p-8 text-white">
      <TypeList addList={addList} />
      <ListTitle />
      <AlertTodo renderData={renderData} />
      <RenderList
        renderData={renderData}
        doneList={doneList}
        deleteList={deleteList}
      />
    </div>
  );
};

export default Home;

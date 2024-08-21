import React, { useState } from "react";
import TypeList from "../components/TypeList";
import RenderList from "../components/RenderList";
import AlertTodo from "../components/AlertTodo";
import ListTitle from "../components/ListTitle";

const Home = () => {
  return (
    <div className=" p-8 text-white">
      <TypeList />
      <ListTitle />
      <AlertTodo />
      <RenderList />
    </div>
  );
};

export default Home;

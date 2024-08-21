import React, { useContext } from "react";
import DoneTodo from "./DoneTodo";
import DeleteTodo from "./DeleteTodo";
import Empty from "./Empty";
import { useTaskStore } from "../store/useTaskStore";

const RenderList = () => {
  const { renderData, doneList, deleteList } = useTaskStore();
  return (
    <div className="">
      <div className=" text-white flex flex-col gap-4 p-4 bg-gray-800 rounded-lg">
        <div className="flex justify-between p-4">
          <div className="capitalize tracking-wider text-base font-semibold">
            task
          </div>
          <div className="flex gap-6">
            <div className="capitalize tracking-wider text-base font-semibold">
              finish
            </div>
            <div className="capitalize tracking-wider text-base font-semibold">
              delete
            </div>
          </div>
        </div>
        <div className=" border-btn_success border "></div>

        {renderData.length < 1 && (
          <div className=" p-10">
            <Empty />
          </div>
        )}

        {renderData.map((ele) => (
          <div key={ele.id} className="p-4 bg-gray-800 rounded-lg">
            <div className=" flex justify-between">
              <div
                className={`capitalize tracking-wider ${
                  ele.finish && "line-through"
                }`}
              >
                {ele.todo}
              </div>
              <div className="flex gap-10">
                <DoneTodo id={ele.id} finish={ele.finish} doneList={doneList} />
                <DeleteTodo id={ele.id} deleteList={deleteList} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderList;

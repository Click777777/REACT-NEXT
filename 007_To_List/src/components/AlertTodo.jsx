import React from "react";

const AlertTodo = ({ renderData }) => {
  return (
    <div className=" p-4 flex justify-between gap-4 flex-wrap">
      <div>
        <div className="flex gap-2">
          <div className=" uppercase text-lg tracking-wide font-semibold">
            total task :
          </div>
          <div className="text-lg tracking-wide font-semibold">
            {renderData.length}
          </div>
        </div>
      </div>

      <div className=" flex gap-4">
        <div className="flex gap-2">
          <div className=" text-btn_success uppercase text-lg tracking-wide font-semibold">
            complete task :
          </div>
          <div className="text-lg tracking-wide font-semibold">
            {renderData.filter((ele) => ele.finish === true).length}
          </div>
        </div>

        <div className=" font-semibold text-lg">|</div>

        <div className="flex gap-2">
          <div className=" text-btn_error uppercase text-lg tracking-wide font-semibold">
            remain task :
          </div>
          <div className="text-lg tracking-wide font-semibold">
            {renderData.filter((ele) => ele.finish === false).length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertTodo;

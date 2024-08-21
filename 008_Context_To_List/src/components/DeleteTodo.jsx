import React from "react";

const DeleteTodo = ({ id, deleteList }) => {
  const handleDelete = () => {
    if (confirm("Delete Task ?")) {
      deleteList(id);
    }
  };
  return (
    <button
      onClick={handleDelete}
      className=" text-btn_error cursor-pointer size-8"
      title="Delete Task"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className=""
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  );
};

export default DeleteTodo;

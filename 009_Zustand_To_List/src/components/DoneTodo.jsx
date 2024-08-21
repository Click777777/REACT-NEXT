import React from "react";

const DoneTodo = ({ id, doneList, finish }) => {
  const handleLineThrough = () => {
    doneList(id);
  };

  return (
    <>
      {finish ? (
        <button
          onClick={handleLineThrough}
          className=" text-btn_success size-8 cursor-pointer"
          title="Done Task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={handleLineThrough}
          className=" text-btn_error size-8 cursor-pointer"
          title="Undone Task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default DoneTodo;

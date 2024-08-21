import React, { useState } from "react";
import { faq } from "../data/FAQ";

const FAQ = () => {
  const [data, setData] = useState(faq);

  const handleIsOpen = (id) => {
    setData(
      data.map((ele) =>
        ele.id === id
          ? { ...ele, isOpen: !ele.isOpen }
          : { ...ele, isOpen: ele.isOpen }
      )
    );
  };

  return (
    <div className=" text-white">
      <h2 className=" capitalize font-bold font-serif text-2xl my-6">
        frequently ask question..
      </h2>

      {data.map((ele) => (
        <div
          key={ele.id}
          className=" p-4 border border-white rounded-md mb-4 select-none cursor-pointer "
          onClick={() => handleIsOpen(ele.id)}
        >
          <div className="flex justify-between items-center">
            <p className=" capitalize">{ele.faqs[0].question}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`size-4 transition-all duration-300 ${
                ele.isOpen ? "rotate-180" : " rotate-0"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </div>

          <div
            className={`overflow-hidden transition-all  duration-300 ease-in-out ${
              ele.isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className=" border border-gray-600 my-4"></div>
            <div className=" bg-gray-700 p-4 rounded-lg">
              {ele.faqs[0].answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

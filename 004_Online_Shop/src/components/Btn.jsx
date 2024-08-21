import React from "react";
import { Link } from "react-router-dom";

const Btn = ({ btn_name }) => {
  return (
    <Link
      className=" text-nowrap inline-block rounded border border-current px-6 py-2 text-sm font-medium text-primary transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
      to="#"
    >
      <p className=" text-primary capitalize">{btn_name}</p>
    </Link>
  );
};

export default Btn;

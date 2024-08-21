/* eslint-disable no-unused-vars */
import { createElementNS } from "three/src/utils.js";
import "./index.css";
import { createElement } from "react";
import { createRoot } from "react-dom/client";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const domNode = document.querySelector("#root");

const reactNodeTitle = createElement(
  "h1",
  { className: " text-3xl capitalize m-6" },
  "online shop"
);

const reactNodeSubTitle = createElement(
  "p",
  { className: "capitalize m-6" },
  "product categories"
);

const reactNodeCategories = createElement(
  "div",
  { className: "" },
  ...categories.map((category) =>
    createElement(
      "button",
      { className: "border border-black px-4 py-2 rounded m-6 mt-0" },
      category
    )
  )
);

createRoot(domNode).render(
  <>
    {reactNodeTitle}
    {reactNodeSubTitle}
    {reactNodeCategories}
  </>
);

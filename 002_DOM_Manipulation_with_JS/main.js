import "./index.css";

const domNode = document.querySelector("#app");
// console.log(domNode);

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

// domNode.innerHTML = "Hello ";

// header
const title = document.createElement("h1");
title.innerText = "online shop";
title.classList.add("text-3xl", "font-bold", "capitalize", "m-6");
// domNode.append(title);

// p tag
const pTag = document.createElement("p");
pTag.innerText = "product categories";
pTag.classList.add("m-6", "capitalize");
domNode.append(title, pTag);

// div tag
const catDiv = document.createElement("div");
domNode.append(catDiv);

// categories
function categoryButton(category) {
  const btn = document.createElement("button");
  btn.innerText = category;
  btn.classList.add(
    "border",
    "border-black",
    "px-4",
    "py-2",
    "rounded",
    "m-6",
    "mt-0"
  );
  return btn;
}

// loop
for (const category of categories) {
  catDiv.append(categoryButton(category));
  console.log(category);
}

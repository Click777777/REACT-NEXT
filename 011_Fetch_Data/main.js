import "./index.css";

const domNode = document.querySelector(".fetch");

const handleFetch = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

domNode.addEventListener("click", handleFetch);

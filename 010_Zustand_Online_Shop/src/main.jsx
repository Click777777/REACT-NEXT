import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const domNode = document.querySelector("#root");

createRoot(domNode).render(<RouterProvider router={router} />);

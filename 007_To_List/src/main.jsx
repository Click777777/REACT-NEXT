import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/router";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
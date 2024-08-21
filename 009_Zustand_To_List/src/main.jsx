import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/router";
import { GlobalProvider } from "./context/GlobalState";

createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <RouterProvider router={Router} />
  </GlobalProvider>
);

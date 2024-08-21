import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import FAQ from "../pages/FAQ.jsx";
import Error_404 from "../pages/Error_404.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error_404 />,
    children: [
      {
        path: "/",
        element: <FAQ />,
      },
    ],
  },
]);

export default router;

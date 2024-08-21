import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ProductCart from "../pages/ProductCart";
import ProductDetails from "../pages/ProductDetails";
import OrderConfirm from "../pages/OrderConfirm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "order-confirmation",
        element: <OrderConfirm />,
      },
      {
        path: "product-cart",
        element: <ProductCart />,
      },
      {
        path: "product-details/:product_id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;

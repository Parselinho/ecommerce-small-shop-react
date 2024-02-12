/* eslint-disable no-unused-vars */
import {
  HomeLayout,
  Landing,
  SingleProduct,
  Products,
  Cart,
  Error,
  About,
  Login,
  Register,
  Checkout,
  Orders,
} from "./pages";
import { ErrorElement } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// loaders
import { loader as landingLoader } from "./loaders/LandingLoader";
import { loader as singleProductLoader } from "./loaders/SingleProductLoader";
import { loader as productsLoader } from "./loaders/ProductsLoader";
// actions

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

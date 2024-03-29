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
import { loader as checkoutLoader } from "./loaders/CheckOutLoader";
import { loader as ordersLoader } from "./loaders/OrdersLoader";

// actions
import { action as registerAction } from "./actions/RegisterAction";
import { action as loginAction } from "./actions/LoginAction";
import { action as checkoutAction } from "./actions/CheckOutFormAction";

import { store } from "./store";

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
        loader: ordersLoader(store),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

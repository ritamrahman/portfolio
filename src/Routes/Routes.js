import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Components/Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

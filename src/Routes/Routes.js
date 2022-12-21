import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Components/Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import data from "../data/projects.json";

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
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

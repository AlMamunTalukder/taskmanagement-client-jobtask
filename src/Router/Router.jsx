import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "./../pages/Registration/Registration";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import DashBoard from "../Layout/DashBoard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "addPublisher",
        // element: <AddPublisher />,
      },
    ],
  },
]);
export default router;

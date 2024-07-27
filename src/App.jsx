import "./style.css";

import Login from "./Components/pages/Sign/Login";
import SignUp from "./Components/pages/Sign/SignUp";
import Home from "./Components/pages/Video/Home";
import Quize from "./Components/pages/Quize/Quize";
import Result from "./Components/pages/Result/Result";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "quize",
        element: <Quize />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

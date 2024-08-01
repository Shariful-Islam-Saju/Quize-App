import "./style.css";

import Login from "./Components/pages/Sign/Login";
import SignUp from "./Components/pages/Sign/SignUp";
import Home from "./Components/pages/Video/Home";
import Quize from "./Components/pages/Quize/Quize";
import Result from "./Components/pages/Result/Result";
import Layout from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/pages/Error";
import AuthProvider from "./Components/Context/AuthContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
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
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;

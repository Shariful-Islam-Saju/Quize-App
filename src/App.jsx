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
import ProtectedRoute from "./Components/Context/ProtectedRoute";
import ProtectedLog from "./Components/Context/ProtectedLog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <ProtectedLog>
            <SignUp />
          </ProtectedLog>
        ),
      },
      {
        path: "quize",
        element: (
          <ProtectedRoute>
            <Quize />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "result",
        element: (
          <ProtectedRoute>
            {" "}
            <Result />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: (
          <ProtectedLog>
            {" "}
            <Login />
          </ProtectedLog>
        ),
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

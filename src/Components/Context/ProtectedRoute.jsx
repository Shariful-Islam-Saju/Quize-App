import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const ProtectedRoute = ({ children }) => {
  const { currentUser , loding} = useAuth();
  console.log(useAuth());
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);
  return (
    <>
      {loding && <h1> Loding...</h1>} {!loding && children}
    </>
  );
};

export default ProtectedRoute;

import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const ProtectedLog = ({ children }) => {
  const { currentUser, loding } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  return <>{loding && <h1> Loding...</h1>} {!loding && children}</>;
};

export default ProtectedLog;

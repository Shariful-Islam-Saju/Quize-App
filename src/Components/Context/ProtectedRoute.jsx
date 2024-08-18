import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const ProtectedRoute = ({ children }) => {
  const [loding, setLoding] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      setLoding(false)
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

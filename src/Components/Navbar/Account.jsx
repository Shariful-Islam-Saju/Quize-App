import { Link } from "react-router-dom";
import style from "./style.module.css";
import useAuth from "../Context/useAuth";

const Account = () => {
  const { currentUser, logOut } = useAuth();
  return (
    <>
      <div className={style.account}>
        {currentUser ? (
          <>
            {" "}
            <span className="material-icons-outlined" title="Account">
              account_circle
            </span>
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              {currentUser?.displayName}
            </span>
            <span
              onClick={() => logOut()}
              className="material-icons-outlined"
              title="Logout"
            >
              logout
            </span>
          </>
        ) : (
          <>
            {" "}
            <Link
              style={{ fontWeight: "600", fontSize: "16px" }}
              to={"/signup"}
            >
              Signup
            </Link>
            <Link style={{ fontWeight: "600", fontSize: "16px" }} to={"/login"}>
              Login
            </Link>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default Account;

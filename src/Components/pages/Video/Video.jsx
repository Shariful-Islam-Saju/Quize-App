import { Link } from "react-router-dom";
import logo from "../../../assets/images/3.jpg";
import style from "./style.module.css";

const Video = () => {
  return (
    <Link to={"quize"}>
      <div className={style.video}>
        <img src={logo} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={style.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;

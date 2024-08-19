/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import style from "./style.module.css";

const Video = ({ item }) => {
  const { title, youtubeID, noq } = item;
  const haveQ = noq === 0 ? true : false;

  if (haveQ) {
    return (
      <div >
        <div className={style.video}>
          <img
            src={`https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
            alt={title}
          />
          <p style={{ height: "60px" }}>{title}</p>
          <div className={style.qmeta}>
            <p>{noq} Questions</p>
            <p>Score : {noq * 5}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Link to={"quize"}>
        <div className={style.video}>
          <img
            src={`https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
            alt={title}
          />
          <p style={{ height: "60px" }}>{title}</p>
          <div className={style.qmeta}>
            <p>{noq} Questions</p>
            <p>Score : {noq * 5}</p>
          </div>
        </div>
      </Link>
    );
  }
};

export default Video;

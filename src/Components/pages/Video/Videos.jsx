/* eslint-disable no-unused-vars */
import style from "./style.module.css";
import Video from "./Video";
import useVideoList from "../../Context/useVideoList";

const Videos = () => {
  const { loding, error, data } = useVideoList();
  return (
    <div className={style.videos}>
      {data?.map((video) => {
        return <Video item={video} key={video.youtubeID} />;
      })}
    </div>
  );
};

export default Videos;

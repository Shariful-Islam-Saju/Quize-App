/* eslint-disable no-unused-vars */
import style from "./style.module.css";
import Video from "./Video";
import useVideoList from "../../Context/useVideoList";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Videos = () => {
  const [page, setPage] = useState(0);
  const { loding, error, data, hasmore } = useVideoList(page);
 
  return (
    <div>
      {data && (
        <InfiniteScroll
          dataLength={data?.length}
          hasMore={hasmore}
          next={() => setPage(page+8)}
          className={style.videos}
        >
          {data?.map((video) => {
            return <Video item={video} key={video.youtubeID} />;
          })}
        </InfiniteScroll>
      )}
      {!loding && data?.length === 0 && <div>No Data Found</div>}
      {error && <div>There is a Error</div>}
      {loding && <div> Loding...</div>}
    </div>
  );
};

export default Videos;

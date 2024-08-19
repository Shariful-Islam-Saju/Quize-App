/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";
import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
const useVideoList = (page) => {
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  const [hasmore, setHasmore] = useState(false);
  useEffect(() => {
    async function renderVideos() {
      setLoding(true);
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt("0"),
        limitToFirst(8 + page)
      );
      try {
        const snapShot = await get(videoQuery);
        setLoding(false);
        if (snapShot.exists()) {
          setData(Object.values(snapShot.val()));
          setHasmore(true);
        } else {
          setHasmore(false);
        }
      } catch (error) {
        setLoding(false);
        setError(error);
        console.log(error);
      }
    }
    renderVideos();
  }, [page]);
  return { loding, error, data, hasmore };
};

export default useVideoList;

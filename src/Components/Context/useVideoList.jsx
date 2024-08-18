/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
const useVideoList = () => {
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState();
  useEffect(() => {
    async function renderVideos() {
      setLoding(true);
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(videosRef, orderByKey());
      try {
        const snapShot = await get(videoQuery);
        setLoding(false);
        if (snapShot.exists()) {
          setData(Object.values(snapShot.val()));
        } else {
          throw new Error("Not Found!");
        }
      } catch (error) {
        setLoding(false);
        setError(error);
        console.log(error);
      }
    }
    renderVideos();
  }, []);
  return { loding, error, data };
};

export default useVideoList;

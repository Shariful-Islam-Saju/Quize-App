import React, { useState } from "react";
import { useEffect } from "react";
import {
  get,
  getDatabase,
  orderByKey,
  query,
  ref,
} from "firebase/database";
const useQuizeList = (id) => {
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(null);
  const [quize, setQuize] = useState();
  useEffect(() => {
    async function renderQuize() {
      setLoding(true);
      const db = getDatabase();
      const quizeRef = ref(db, `quiz/${id}/questions`);
      const quizQuery = query(
        quizeRef,
        orderByKey(),
        
      );
      try {
        const snapShot = await get(quizQuery);
        setLoding(false);
        if (snapShot.exists()) {
          setQuize(Object.values(snapShot.val()));
        } else {
        }
      } catch (error) {
        setLoding(false);
        setError(error);
        console.log(error);
      }
    }

    renderQuize();
  }, [id]);
  return { loding, error, quize };
};

export default useQuizeList;

import React from "react";
import useAuth from "../../Context/useAuth";
import { getDatabase, ref } from "firebase/database";
import Progressbar from "./Progressbar";
function ProgressConstants({ currentQuestion, setCurrentQueston, quize }) {
  const { currentUser } = useAuth();

  function prevQ() {
    if (currentQuestion >= 1 && currentQuestion <= quize.length) {
      setCurrentQueston(-1);
    }
  }
  function handleSave() {
    const uid = currentQuestion.uid;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
  }

  function nextQ() {
    if (currentQuestion + 1 < quize.length) {
      setCurrentQueston(1);
    }
  }

  function per() {
    const q =
      quize?.length > 0 ? ((currentQuestion + 1) / quize?.length) * 100 : 0;
    return q;
  }

  const percentage = per();

  return (
    <>
      {" "}
      <Progressbar
        next={nextQ}
        prev={prevQ}
        progress={percentage}
        save={handleSave}
      />
    </>
  );
}

export default ProgressConstants;

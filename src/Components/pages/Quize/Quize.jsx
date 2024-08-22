import React, { useEffect, useReducer, useState } from "react";
import Answer from "./Answer";
import MiniPlayer from "./MiniPlayer";
import useQuizList from "../../Context/useQuizList";
import { useLocation } from "react-router-dom";
import reducer from "./useReducers";
import ProgressConstants from "./progressConstants";

const Quize = () => {
  const location = useLocation();
  const id = location.state.youtubeID;
  const [currentQuestion, setCurrentQueston] = useState(0);
  const { loding, error, quize } = useQuizList(id);
  const [qna, dispatch] = useReducer(reducer, quize);

  const handleChange = (e, i) => {
    dispatch({
      type: "answer",
      payload: {
        youtubeID: currentQuestion,
        optionIndex: i,
        value: e.target.checked,
      },
    });
  };

  useEffect(() => {
    dispatch({ type: "questions", payload: quize });
  }, [quize]);
  return (
    <div>
      {loding && <div>Loding...</div>}
      {error && (
        <div> There was an Error In your Life, Not In my Program. </div>
      )}
      <h1>{qna && qna[currentQuestion].title}</h1>

      <h4>Question can have multiple answers</h4>
      <Answer
        options={qna && qna[currentQuestion].options}
        handleChange={handleChange}
      />
      <ProgressConstants
        currentQuestion={currentQuestion}
        setCurrentQueston={(number) => {
          setCurrentQueston((q) => q + number);
        }}
        quize={quize}
      />

      <MiniPlayer />
    </div>
  );
};

export default Quize;

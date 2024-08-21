import React, { useEffect, useReducer, useState } from "react";
import Answer from "./Answer";
import MiniPlayer from "./MiniPlayer";
import Progressbar from "./Progressbar";
import useQuizList from "../../Context/useQuizList";
import { useLocation } from "react-router-dom";
import reducer from "./useReducers";

const Quize = () => {
  const location = useLocation();
  const id = location.state.youtubeID;
  const [currentQuestion, setCurrentQueston] = useState(2);
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
      <h1>{qna && qna[currentQuestion].title}</h1>

      <h4>Question can have multiple answers</h4>
      <Answer
        options={qna && qna[currentQuestion].options}
        handleChange={handleChange}
      />
      <Progressbar />
      <MiniPlayer />
    </div>
  );
};

export default Quize;

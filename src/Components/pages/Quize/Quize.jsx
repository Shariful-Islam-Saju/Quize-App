import React from "react";
import Answer from "./Answer";
import MiniPlayer from "./MiniPlayer";
import Progressbar from "./Progressbar";

const Quize = () => {
  return (
    <div>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answer />
      <Progressbar />
      <MiniPlayer />
    </div>
  );
};

export default Quize;

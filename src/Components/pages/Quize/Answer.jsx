import Option from "./Option";
import style from "./style.module.css";
import useQuizList from "../../Context/useQuizList";
import { useLocation } from "react-router-dom";

const Answer = () => {
  const location = useLocation();
  const id = location.state.youtubeID;
  const { loding, error, quize } = useQuizList(id);
  console.log(quize);
  return (
    <div className={style.answers}>
      <Option id={2} text={"New Hope"} />
      <Option id={2} text={"New Hope"} />
      <Option id={2} text={"New Hope"} />
      <Option id={2} text={"New Hope"} />
    </div>
  );
};

export default Answer;

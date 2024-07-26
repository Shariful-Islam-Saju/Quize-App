import signIMG from "../../../assets/images/signup.svg";
import style from "./style.module.css";
const Illustration = () => {
  return (
    <div>
      <div className={style.illustration}>
        <img src={signIMG} alt="Signup" />
      </div>
    </div>
  );
};

export default Illustration;

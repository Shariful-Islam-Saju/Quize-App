import style from "./style.module.css";

const Button = () => {
  return (
    <button className={style.button}>
      <span>Submit now</span>
    </button>
  );
};

export default Button;

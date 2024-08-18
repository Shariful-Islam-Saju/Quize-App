import style from "./style.module.css";

const Button = ({ disabled }) => {
  return (
    <button disabled={disabled} className={style.button}>
      <span>Submit now</span>
    </button>
  );
};

export default Button;

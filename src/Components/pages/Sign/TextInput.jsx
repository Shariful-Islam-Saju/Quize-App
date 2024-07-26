import style from "./style.module.css";

const TextInput = ({icon, ...rest}) => {
  return (
    <>
      <div className={style.textInput}>
        <input {...rest} />
        <span className="material-icons-outlined"> {icon} </span>
      </div>
    </>
  );
};

export default TextInput;

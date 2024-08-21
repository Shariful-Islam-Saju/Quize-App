import Option from "./Option";
import style from "./style.module.css";

const Answer = ({ options, handleChange }) => {
  return (
    <div className={style.answers}>
      {options &&
        options.map((item, i) => {
          return (
            <Option
              key={i}
              isChecked={item.isChecked}
              handleChange={handleChange}
              id={i}
              text={item.title}
            />
          );
        })}
    </div>
  );
};

export default Answer;

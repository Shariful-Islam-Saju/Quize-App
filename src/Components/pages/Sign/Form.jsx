/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from "./style.module.css";

const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${className} ${style.form}`} action="#">
      {children}
    </form>
  );
};

export default Form;

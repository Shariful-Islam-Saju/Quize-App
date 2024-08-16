/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from "./style.module.css";

const Form = ({ children, className,onSubmit, ...rest }) => {
  return <form onSubmit={onSubmit} className={`${className} ${style.form}`}>{children}</form>;
};

export default Form;

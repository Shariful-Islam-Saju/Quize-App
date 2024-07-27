import Button from "./Button";
import Form from "./Form";
import Illustration from "./Illustration";
import Info from "./Info";
import TextInput from "./TextInput";

import style from "./style.module.css";

const Login = () => {
  return (
    <>
      <h1>Login to your Account </h1>
      <div className="column">
        <Illustration />
        <Form className={`${style.login}`}>
          <TextInput
            type="email"
            placeholder="Enter your email"
            icon="alternate_email"
          />{" "}
          <TextInput
            type="password"
            placeholder="Enter your password"
            icon="lock"
          />{" "}
          <Button />
          <Info
            text1="Don't have any account ? "
            text2="Signup"
            link="/signup"
          />
        </Form>
      </div>
    </>
  );
};

export default Login;

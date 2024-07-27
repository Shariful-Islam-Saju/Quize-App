import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import Illustration from "./Illustration";
import Info from "./Info";
import TextInput from "./TextInput";

import style from "./style.module.css";

const SignUp = () => {
  return (
    <>
      <h1>Create an account </h1>
      <div className="column">
        <Illustration />
        <Form className={`${style.signup}`}>
          <TextInput type="name" placeholder="Enter your name" icon="person" />{" "}
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
          <TextInput
            type="password"
            placeholder="Confirm  password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button />
          <Info text1="Already have an account ? " text2="Login" link="/login" />
        </Form>
      </div>
    </>
  );
};

export default SignUp;

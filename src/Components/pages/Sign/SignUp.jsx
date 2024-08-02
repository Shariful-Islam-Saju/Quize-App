import { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import Illustration from "./Illustration";
import Info from "./Info";
import TextInput from "./TextInput";
import { useAuth } from "../../Context/useAuth";
import style from "./style.module.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [condition, setCondition] = useState(true);
  const [error, setError] = useState();
  return (
    <>
      <h1>Create an account </h1>
      <div className="column">
        <Illustration />
        <Form className={`${style.signup}`}>
          <TextInput
            type="name"
            placeholder="Enter your name"
            icon="person"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />{" "}
          <TextInput
            type="email"
            placeholder="Enter your email"
            icon="alternate_email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />{" "}
          <TextInput
            type="password"
            placeholder="Enter your password"
            icon="lock"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />{" "}
          <TextInput
            type="password"
            placeholder="Confirm  password"
            icon="lock_clock"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <Checkbox
            text="I agree to the Terms &amp; Conditions"
            required
            value={condition}
            onChange={(e) => {
              setCondition(e.target.value);
            }}
          />
          <Button />
          <Info
            text1="Already have an account ? "
            text2="Login"
            link="/login"
          />
        </Form>
      </div>
    </>
  );
};

export default SignUp;

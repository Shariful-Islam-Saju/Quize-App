import { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import Illustration from "./Illustration";
import Info from "./Info";
import TextInput from "./TextInput";
import useAuth from "../../Context/useAuth";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loding, setLoding] = useState(false);

  const { login, currentUser } = useAuth();

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setLoding(true);
    try {
      await login(email, password);
      navigate("/");
      setLoding(false);
    } catch (error) {
      setLoding(false);
      setError("Account not Found!!!");
    }
  }
  return (
    <>
      <h1>Login to your Account </h1>
      <div className="column">
        <Illustration />
        <Form onSubmit={handleSubmit} className={`${style.login}`}>
          <TextInput
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            required
            icon="alternate_email"
            value={email}
          />{" "}
          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Enter your password"
            icon="lock"
            value={password}
          />{" "}
          {error && <p className="error">{error}</p>}
          <Button disabled={loding} type="submit" />
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

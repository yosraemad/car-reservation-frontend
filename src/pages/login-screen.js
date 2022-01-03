import CustomButton from "../components/UI/CustomButton";
import CustomInput from "../components/UI/CustomInput";
import styles from "../styles/form.module.css";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <form className={styles.form}>
      <h1>Login</h1>
      <CustomInput
        labelText="email"
        id="email"
        handleChange={() => {}}
        type="text"
      />
      <CustomInput
        labelText="password"
        id="password"
        handleChange={() => {}}
        type="password"
      />
      <CustomButton>Log in</CustomButton>
      <p>
        don't have an account ? <Link to="sign-up">Sign Up</Link>{" "}
      </p>
    </form>
  );
};

export default LoginScreen;

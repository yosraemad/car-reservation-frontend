import CustomButton from "../components/UI/CustomButton";
import CustomInput from "../components/UI/CustomInput";
import styles from "../styles/form.module.css";
import { Link } from "react-router-dom";

const SignUpScreen = () => {
  return (
    <form className={styles.form}>
      <h1>Sign Up</h1>
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
      <CustomInput
        labelText="confirm password"
        id="confirmPassword"
        handleChange={() => {}}
        type="password"
      />
      <CustomButton>Sign Up</CustomButton>
      <p>
        have an account ? <Link to="/">Log In</Link>{" "}
      </p>
    </form>
  );
};

export default SignUpScreen;

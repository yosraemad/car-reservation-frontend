import CustomButton from "../components/UI/CustomButton";
import CustomInput from "../components/UI/CustomInput";
import styles from "../styles/form.module.css";
import { Link } from "react-router-dom";
import React from "react";
import labelstyles from "../styles/label.module.css";

const LoginScreen = () => {
  return (
    <form className={styles.form}>
      <h1 className={labelstyles.header}>Login</h1><br></br>
      <label className={labelstyles.label} >Email</label>
      <CustomInput
        labelText="email"
        id="email"
        handleChange={() => {}}
        type="text"
      />
      <label >Password</label>
      <CustomInput
        labelText="password"
        id="password"
        handleChange={() => {}}
        type="password"
      />
      <CustomButton>Log in</CustomButton><br></br>
      <p>
        don't have an account ? <Link to="sign-up">Sign Up</Link>{" "}
      </p>
    </form>
  );
};

export default LoginScreen;

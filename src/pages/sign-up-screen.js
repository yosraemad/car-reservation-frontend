import CustomButton from "../components/UI/CustomButton";
import CustomInput from "../components/UI/CustomInput";
import styles from "../styles/form.module.css";
import { Link } from "react-router-dom";
import React from "react";
import labelstyles from "../styles/label.module.css";

const SignUpScreen = () => {
  return (
    <form className={styles.form}>
      <h1 className={labelstyles.header} >Sign Up</h1><br></br>
      <label className={labelstyles.label}>Email</label>
      <CustomInput
        labelText="email"
        id="email"
        handleChange={() => {}}
        type="text"
      />
      <label className={labelstyles.label} >Password</label>
      <CustomInput
        labelText="password"
        id="password"
        handleChange={() => {}}
        type="password"
      />
      <label className={labelstyles.label}>Confirm Password</label>
      <CustomInput
        labelText="confirm password"
        id="confirmPassword"
        handleChange={() => {}}
        type="password"
      />
      <CustomButton>Sign Up</CustomButton><br></br>
      <p>
        have an account ? <Link to="/">Log In</Link>{" "}
      </p>
    </form>
  );
};

export default SignUpScreen;

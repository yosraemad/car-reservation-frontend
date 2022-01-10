import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import styles from "../../styles/form.module.css";
import { Link } from "react-router-dom";
import React from "react";
import labelstyles from "../../styles/label.module.css";
import { useRef } from "react";

const SignInForm = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    props.onSubmit(userData);
  };

  return (
    <form className={styles.form}>
      <h1 className={labelstyles.header}>Login</h1>
      <br></br>
      <label className={labelstyles.label}>Email</label>
      <CustomInput
        labelText="email"
        id="email"
        handleChange={() => {}}
        type="text"
        ref={emailRef}
      />
      <label>Password</label>
      <CustomInput
        labelText="password"
        id="password"
        handleChange={() => {}}
        type="password"
        ref={passwordRef}
      />
      <CustomButton onClicked={handleSubmit}>Log in</CustomButton>
      <br></br>
      <p>
        don't have an account ? <Link to="sign-up">Sign Up</Link>{" "}
      </p>
      <br></br>
      <br />
    </form>
  );
};

export default SignInForm;

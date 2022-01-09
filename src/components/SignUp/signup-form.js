import { useRef } from "react";
import styles from "../../styles/form.module.css";
import labelStyles from "../../styles/label.module.css";
import CustomButton from "../UI/CustomButton";
import CustomInput from "../UI/CustomInput";
import React from "react";
import { Link } from "react-router-dom";
const SignUpForm = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const licenseRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value);
    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      address:
        addressRef.current.value +
        " " +
        cityRef.current.value +
        ", " +
        countryRef.current.value,
      license_number: licenseRef.current.value,
    };
    props.onSubmitForm(userData);
  };
  return (
    <form className={styles.form}>
      {props.loading ? "Loading..." : null}
      <h1 className={labelStyles.header}>Sign Up</h1>
      <label className={labelStyles.label}>Name</label>
      <CustomInput
        labelText="Name"
        id="name"
        handleChange={() => {}}
        type="text"
        ref={nameRef}
      />
      <label className={labelStyles.label}>Email</label>
      <CustomInput
        labelText="email"
        id="email"
        handleChange={() => {}}
        type="email"
        ref={emailRef}
      />
      <label className={labelStyles.label}>Password</label>
      <CustomInput
        labelText="password"
        id="password"
        handleChange={() => {}}
        type="password"
        ref={passwordRef}
      />
      <label className={labelStyles.label}>Confirm Password</label>
      <CustomInput
        labelText="confirm password"
        id="confirmPassword"
        handleChange={() => {}}
        type="password"
        ref={confirmPasswordRef}
      />
      <label className={labelStyles.label}>Phone</label>
      <CustomInput
        labelText="phone"
        id="phone"
        handleChange={() => {}}
        type="phone"
        ref={phoneRef}
      />
      <label className={labelStyles.label}>Address</label>
      <CustomInput
        labelText="address"
        id="address"
        handleChange={() => {}}
        type="text"
        ref={addressRef}
      />
      <label className={labelStyles.label}>City</label>
      <CustomInput
        labelText="City"
        id="city"
        handleChange={() => {}}
        type="text"
        ref={cityRef}
      />
      <label className={labelStyles.label}>Country</label>
      <CustomInput
        labelText="country"
        id="country"
        handleChange={() => {}}
        type="text"
        ref={countryRef}
      />
      <label className={labelStyles.label}>License Number</label>
      <CustomInput
        labelText="license number"
        id="licenseNumber"
        handleChange={() => {}}
        type="text"
        ref={licenseRef}
      />
      <CustomButton onClicked={handleSubmit}>Sign Up</CustomButton>
      <br></br>
      <p>
        have an account ? <Link to="/">Log In</Link>{" "}
      </p>
    </form>
  );
};

export default SignUpForm;

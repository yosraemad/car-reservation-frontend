import SignUpForm from "../components/SignUp/signup-form";
import useHttp from "../hooks/use-http";
import React, { useContext } from "react";
import AccountContext from "../models/account";
import { useNavigate } from "react-router-dom";

const SignUpScreen = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const accCtx = useContext(AccountContext);
  const navigate = useNavigate();

  if (accCtx.token) {
    navigate("/home");
  }

  const createUser = (userData, responseData) => {
    console.log(userData);
    console.log(responseData);
    accCtx.setAccount(responseData.user, responseData.token);
  };
  const enterUserHandler = async (userData) => {
    const response = await sendRequest(
      {
        url: "http://localhost:5000/api/v1/auth/register",
        method: "POST",
        body: userData,
        headers: {
          "Content-Type": "application/json",
        },
      },
      createUser.bind(null, userData)
    );
    !error ? navigate("/home") : console.log(error);
  };
  return (
    <>
      <SignUpForm onSubmitForm={enterUserHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </>
  );
};

export default SignUpScreen;

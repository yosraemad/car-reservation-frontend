import React, { useContext } from "react";
import SignInForm from "../components/SignIn/SignInForm";
import useHttp from "../hooks/use-http";
import AccountContext from "../models/account";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const accCtx = useContext(AccountContext);
  const navigate = useNavigate();

  if (accCtx.token || localStorage.getItem("token")) {
    navigate("/home");
  }

  const userLogin = (responseData) => {
    console.log(responseData);
    localStorage.setItem("token", responseData.token);
    if (responseData.role === "customer") {
      accCtx.setAccount(responseData.customer, responseData.token);
      navigate("/home");
    } else {
      accCtx.setAccount(responseData.admin, responseData.token);
      navigate("/admin");
    }
  };

  const signInHandler = async (userData) => {
    const response = await sendRequest(
      {
        url: "http://localhost:5000/api/v1/auth/login",
        method: "POST",
        body: userData,
        headers: {
          "Content-Type": "application/json",
        },
      },
      userLogin.bind(null)
    );
  };
  return (
    <>
      <SignInForm onSubmit={signInHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </>
  );
};

export default LoginScreen;

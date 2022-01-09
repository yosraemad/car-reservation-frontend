import React, { useEffect, useState, useContext } from "react";
import useHttp from "../hooks/use-http";
import AccountContext from "../models/account";
import CarDescItem from "../components/UI/CarDescItem";
import { useLocation } from "react-router-dom";
import CustomInput from "../components/UI/CustomInput";

const CreateCarScreen = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const accCtx = useContext(AccountContext);
  const { state } = useLocation();
  const carDesc = state;

  return (
    <div>
      <h1>Create car screen</h1>
    </div>
  );
};

export default CreateCarScreen;

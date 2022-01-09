import React from "react";
import CarItem from "../components/UI/caritem";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AccountContext from "../models/account";
import AvailableCars from "../components/HomeScreen/AvailableCars";
const HomeScreen = () => {
  const accCtx = useContext(AccountContext);

  return accCtx.token ? (
    <>
      <AvailableCars token={accCtx.token} />
    </>
  ) : (
    <h1>
      Please <Link to="/">login</Link> to view available cars
    </h1>
  );
};

export default HomeScreen;

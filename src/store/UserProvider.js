import { useReducer } from "react";
import AccountContext from "../models/account";
import React from "react";

const defaultAccountState = {
  account: {},
  token: null,
};

const setUser = (state, account, token) => {
  return {
    ...state,
    account,
    token,
  };
};

const accountReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACCOUNT":
      return setUser(state, action.account, action.token);
    default:
      return state;
  }
};

const AccountProvider = (props) => {
  const [state, dispatch] = useReducer(accountReducer, defaultAccountState);
  const setAccount = (account, token) => {
    dispatch({
      type: "SET_ACCOUNT",
      account,
      token,
    });
  };
  const accountContext = {
    account: state.account,
    token: state.token,
    setAccount,
  };
  return (
    <AccountContext.Provider value={accountContext}>
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;

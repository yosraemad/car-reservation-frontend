import React from "react";

const AccountContext = React.createContext({
  account: {},
  token: "",
  setAccount: () => {},
});

export default AccountContext;

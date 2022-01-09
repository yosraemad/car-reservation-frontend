import React from "react";

const AccountContext = React.createContext({
  account: {},
  token: null,
  setAccount: () => {},
});

export default AccountContext;

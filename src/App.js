import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/login-screen";
import SignUpScreen from "./pages/sign-up-screen";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme.js"


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Header />

      <Routes>
        <Route path="/" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="sign-up" element={<SignUpScreen></SignUpScreen>} />
      </Routes>

    </ThemeProvider>
  );
}

export default App;

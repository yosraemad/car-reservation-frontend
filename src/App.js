import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/login-screen";
import SignUpScreen from "./pages/sign-up-screen";
import HomeScreen from "./pages/home-screen";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme.js"


function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Header />
      <br></br>
      <Routes>
        <Route path="/" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="sign-up" element={<SignUpScreen></SignUpScreen>} />
        <Route path="home" element={<HomeScreen></HomeScreen>} />
      </Routes>

    </ThemeProvider>
  );
}

export default App;

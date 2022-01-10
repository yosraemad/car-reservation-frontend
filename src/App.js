import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/login-screen";
import SignUpScreen from "./pages/sign-up-screen";
import HomeScreen from "./pages/home-screen";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme.js";
import AccountProvider from "./store/UserProvider";
import AdminScreen from "./pages/admin-screen";
import NewCarDescScreen from "./pages/new-car-desc-screen";
import CreateCarScreen from "./pages/create-car-screen";
import ReservationScreen from "./pages/reservation-screen";
import CarSearchScreen from "./pages/car-search-screen";
import CustomerSearchScreen from "./pages/customer-search-screen";
import CreateCarOfficeScreen from "./pages/create-car-office-screen";
import ReservationSearchScreen from "./pages/reservation-search-screen";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AccountProvider>
        <Header />
        <br></br>
        <Routes>
          <Route path="/" element={<LoginScreen></LoginScreen>}></Route>
          <Route path="sign-up" element={<SignUpScreen></SignUpScreen>} />
          <Route path="home" element={<HomeScreen></HomeScreen>} />
          <Route path="admin" element={<AdminScreen />} />
          <Route path="new-car-desc" element={<NewCarDescScreen />} />
          <Route path="create-car" element={<CreateCarScreen />} />
          <Route path="reservation" element={<ReservationScreen />} />
          <Route path="car-search" element={<CarSearchScreen />} />
          <Route path="customer-search" element={<CustomerSearchScreen />} />
          <Route path="create-office-car" element={<CreateCarOfficeScreen />} />
          <Route path="car-search" element={<CarSearchScreen />} />
          <Route path="reservation-search" element={<ReservationSearchScreen />} />
        </Routes>
      </AccountProvider>
    </ThemeProvider>
  );
}

export default App;

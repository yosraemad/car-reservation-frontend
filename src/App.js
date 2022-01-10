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
import ReportScreen from "./pages/report-screen";
import ReservationReport from "./components/reports/ReservationReport";
import CarsReport from "./components/reports/CarsReport";
import CarStatusReport from "./components/reports/CarStatusReport";
import CustomerReport from "./components/reports/CustomerReport";
import PaymentReport from "./components/reports/PaymentReport";
import ReservationSearchScreen from "./pages/reservation-search-screen";
import EditCarStatusPage from "./pages/edit-car-status-page";
import SetStatusPage from "./pages/set-status-page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AccountProvider>
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
          <Route path="reports" element={<ReportScreen />}>
            <Route index path="reservations" element={<ReservationReport />} />
            <Route path="car" element={<CarsReport />} />
            <Route path="carStatus" element={<CarStatusReport />} />
            <Route path="customer" element={<CustomerReport />} />
            <Route path="payments" element={<PaymentReport />} />
          </Route>
          <Route path="car-search" element={<CarSearchScreen />} />
          <Route path="reservation-search" element={<ReservationSearchScreen />} />
          <Route path="edit-car-status" element={<EditCarStatusPage />} />
          <Route path="set-status" element={<SetStatusPage />} />
        </Routes>
      </AccountProvider>
    </ThemeProvider>
  );
}

export default App;

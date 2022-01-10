import React from "react";
import { Routes, Route } from "react-router-dom";
import CarsReport from "../components/reports/CarsReport";
import CarStatusReport from "../components/reports/CarStatusReport";
import CustomerReport from "../components/reports/CustomerReport";
import PaymentReport from "../components/reports/PaymentReport";
import ReservationReport from "../components/reports/ReservationReport";
import CustomButton from "../components/UI/CustomButton";
import { useNavigate } from "react-router-dom";
const ReportScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Select an option</h1>
      <CustomButton
        onClicked={() => {
          navigate("reservations");
        }}
      >
        Reservations
      </CustomButton>
      <CustomButton onClicked={() => navigate("car")}>Cars</CustomButton>
      <CustomButton onClicked={() => navigate("carStatus")}>
        Car Status
      </CustomButton>
      <CustomButton onClicked={() => navigate("customer")}>
        Customers
      </CustomButton>
      <CustomButton onClicked={() => navigate("payments")}>
        Payments
      </CustomButton>
      <br />
      <br />
      <Routes>
        <Route path="reservations" element={<ReservationReport />} />
        <Route path="car" element={<CarsReport />} />
        <Route path="carStatus" element={<CarStatusReport />} />
        <Route path="customer" element={<CustomerReport />} />
        <Route path="payments" element={<PaymentReport />} />
      </Routes>
    </div>
  );
};

export default ReportScreen;

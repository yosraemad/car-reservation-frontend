import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CarDetails from "../components/Reservation/CarDetails";
const ReservationScreen = () => {
  const { state } = useLocation();
  const officeCar = state.officeCar;
  console.log(officeCar);
  useEffect(async () => {}, []);
  return <CarDetails officeCar={officeCar} />;
};

export default ReservationScreen;

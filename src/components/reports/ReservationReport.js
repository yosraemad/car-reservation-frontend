import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import CustomButton from "../UI/CustomButton";
import useHttp from "../../hooks/use-http";
import ReservationDetails from "./details/ReservationDetails";
const ReservationReport = () => {
  const [returnDate, setReturnDate] = useState(null);
  const [pickup, setPickup] = useState(null);
  const [resDate, setResDate] = useState(null);
  const { error, isLoading, sendRequest } = useHttp();
  const [reservations, setReservations] = useState([]);

  const fillReservations = (responseData) => {
    console.log(responseData);
    let res = [];
    for (let i = 0; i < responseData.length; i++) {
      res.push(responseData[i]);
    }
    setReservations(res);
  };

  const handleSubmit = async () => {
    let queryString = "?";
    const returnDateDate = new Date(returnDate);
    const pickupDate = new Date(pickup);
    const resDateDate = new Date(resDate);
    queryString +=
      "return_date=" + returnDateDate.toISOString().substring(0, 10) + "&";
    queryString += "pickup_date=" + pickupDate.toISOString().substring(0, 10);
    console.log(queryString);
    const response = await sendRequest(
      {
        url: "http://localhost:5000/api/v1/reports/reservations" + queryString,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
      fillReservations.bind(this)
    );
  };
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Reservation Date"
          value={resDate}
          onChange={(newValue) => {
            setResDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Pickup Date"
          value={pickup}
          onChange={(newValue) => {
            setPickup(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Return Date"
          value={returnDate}
          onChange={(newValue) => {
            setReturnDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <CustomButton onClicked={handleSubmit}>Submit</CustomButton>
      <div>
        {reservations.map((reservation) => (
          <ReservationDetails res={reservation} />
        ))}
      </div>
    </div>
  );
};

export default ReservationReport;

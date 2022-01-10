import React, { useRef, useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import CustomButton from "../UI/CustomButton";
import useHttp from "../../hooks/use-http";
import CarStatusDetails from "./details/CarStatusDetails";

const CarStatusReport = () => {
  const [date, setdate] = useState(null);
  const { error, isLoading, sendRequest } = useHttp();
  const [cars, setReservations] = useState([]);
  const fillCars = (responseData) => {
    console.log(responseData);
    let res = [];
    for (let i = 0; i < responseData.length; i++) {
      res.push(responseData[i]);
    }
    setReservations(res);
  };

  const handleSubmit = async () => {
    let queryString = "?";
    const dateString = new Date(date).toISOString().substring(0, 10);

    const response = await sendRequest(
      {
        url: "http://localhost:5000/api/v1/reports/carStatus/" + dateString,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
      fillCars.bind(this)
    );
  };
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Return Date"
          value={date}
          onChange={(newValue) => {
            setdate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <CustomButton onClicked={handleSubmit}>Submit</CustomButton>
      <div>
        {cars.map((car) => (
          <CarStatusDetails car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarStatusReport;

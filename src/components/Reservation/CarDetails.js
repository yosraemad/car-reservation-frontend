import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";
import useHttp from "../../hooks/use-http";
const CarDetails = (props) => {
  const { officeCar } = props;
  const [returnDate, setReturnDate] = useState(null);
  const { isLoading, error, sendRequest } = useHttp();
  const [pickup, setPickup] = useState(null);
  const pickUpAddress = useRef();
  const [checked, setChecked] = React.useState(false);

  const totalPrice =
    Math.ceil(
      (new Date(returnDate) - new Date(pickup)) / (1000 * 60 * 60 * 24) - 1
    ) * officeCar.Car.CarPrice.price_per_day;

  const reserved = (responseData) => {
    console.log(responseData);
  };

  const handleSubmit = () => {
    const returnDateDate = new Date(returnDate);
    const pickupDate = new Date(pickup);

    const request = sendRequest(
      {
        url: "http://localhost:5000/api/v1/reservations",
        method: "POST",
        body: {
          car_id: officeCar.car_id,
          pickup_date:
            "pickup_date=" +
            pickupDate.getFullYear() +
            "-" +
            pickupDate.getMonth() +
            1 +
            "-" +
            pickupDate.getDay(),
          return_date:
            returnDateDate.getFullYear() +
            "-" +
            returnDateDate.getMonth() +
            1 +
            "-" +
            returnDateDate.getDay(),
          pickup_address: pickUpAddress.current.value,
          payment_time: checked ? "later" : "now",
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
      reserved.bind(null)
    );
  };

  return (
    <div>
      <img src={officeCar.Car.CarDescription.image} />
      <p>brand: {officeCar.Car.CarDescription.brand}</p>
      <p>model: {officeCar.Car.CarDescription.model}</p>
      <p>year: {officeCar.Car.CarDescription.year}</p>
      <p>color: {officeCar.Car.CarDescription.color}</p>
      <p>transmission: {officeCar.Car.CarDescription.transmission}</p>
      <p>type: {officeCar.Car.CarDescription.type}</p>
      <p>Office Address: {officeCar.Office.address}</p>
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
          format="YYYY-MM-DD"
          label="Return Date"
          value={returnDate}
          onChange={(newValue) => {
            setReturnDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <label>pickup address: </label>
      <CustomInput
        format="YYYY-MM-DD"
        labelText="pickup address"
        id="pickup address"
        handleChange={() => {}}
        type="text"
        ref={pickUpAddress}
      />
      <br></br>
      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>Pay Later</span>
      </label>
      <h3>Total Price: LE{totalPrice < 0 ? 0 : totalPrice}</h3>
      <CustomButton onClicked={handleSubmit}>Submit</CustomButton>
    </div>
  );
};

export default CarDetails;

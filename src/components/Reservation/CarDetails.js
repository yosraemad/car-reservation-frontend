import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";
import useHttp from "../../hooks/use-http";
import { useNavigate } from "react-router-dom";
const CarDetails = (props) => {
  const { officeCar } = props;
  const [returnDate, setReturnDate] = useState(null);
  const { isLoading, error, sendRequest } = useHttp();
  const [pickup, setPickup] = useState(null);
  const pickUpAddress = useRef();
  const [checked, setChecked] = React.useState(false);
  const [reservations, setReservations] = useState([]);
  const navigate = useNavigate();

  useEffect(async () => {
    const setReservationTimes = (responseData) => {
      console.log(responseData);
      if (responseData) {
        let reservationsArray = [];
        for (let i = 0; i < responseData.length; i++) {
          reservationsArray.push(responseData[i]);
        }
        setReservations(reservationsArray);
      }
    };
    const getReservationTimesOfCars = async () => {
      const response = await sendRequest(
        {
          url: `http://localhost:5000/api/v1/reservations/car/${officeCar.car_id}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
        setReservationTimes.bind(null)
      );
    };

    getReservationTimesOfCars();
  }, []);

  const totalPrice =
    Math.ceil(
      (new Date(returnDate) - new Date(pickup)) / (1000 * 60 * 60 * 24) - 1
    ) * officeCar.Car.CarPrice.price_per_day;

  const reserved = (responseData) => {
    console.log(responseData);
    if (responseData) {
      navigate("/home");
    }
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
            "pickup_date=" + pickupDate.toISOString().substring(0, 10),
          return_date: returnDateDate.toISOString().substring(0, 10),
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

  const labelStyle = {
    fontSize: 18,
    color: "navy",
  };

  return (
    <div style={{ padding: 30 }}>
      <img src={officeCar.Car.CarDescription.image} />
      <p style={labelStyle}>brand: {officeCar.Car.CarDescription.brand}</p>
      <p style={labelStyle}>model: {officeCar.Car.CarDescription.model}</p>
      <p style={labelStyle}>year: {officeCar.Car.CarDescription.year}</p>
      <p style={labelStyle}>color: {officeCar.Car.CarDescription.color}</p>
      <p style={labelStyle}>
        transmission: {officeCar.Car.CarDescription.transmission}
      </p>
      <p style={labelStyle}>type: {officeCar.Car.CarDescription.type}</p>
      <p style={labelStyle}>Office Address: {officeCar.Office.address}</p>
      <br />
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
      <br />
      <br />

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
      <br />

      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>Pay Later</span>
      </label>
      <br />
      <h3>Total Price: LE{totalPrice < 0 ? 0 : totalPrice}</h3>
      <br />

      <CustomButton onClicked={handleSubmit}>Submit</CustomButton>
      {error && <div style={{ backgroundColor: "red" }}>{error}</div>}
      <h3>Current Reservation</h3>
      {reservations.map((reservation) => {
        return (
          <div>
            <p>
              {reservation.Pickup.pickup_date} - {reservation.return_date}
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default CarDetails;

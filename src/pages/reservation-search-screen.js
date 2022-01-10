import React, { useEffect, useState, useContext, useRef } from "react";
import useHttp from "../hooks/use-http";
import labelstyles from "../styles/label.module.css";
import CustomInput from "../components/UI/CustomInput";
import CustomButton from "../components/UI/CustomButton";

const ReservationSearchScreen = () => {
  const { isLoading, error, sendRequest } = useHttp();

  const [reservations, setReservations] = useState([]);

  const res_id = useRef();
  const car_id = useRef();
  const customer_id = useRef();
  const res_date = useRef();
  const return_date = useRef();

  const filterReservation = (responseData) => {
    console.log(responseData);
    if (responseData) {
      let reservationArr = [];
      for (let i = 0; i < responseData.length; i++) {
        reservationArr.push(responseData[i]);
      }

      setReservations(reservationArr);
    }
  };

  const handleFiltering = async (queryString) => {
    const token = localStorage.getItem("token");
    const response = await sendRequest(
      {
        url: "http://localhost:5000/api/v1/search-reservations" + queryString,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      },
      filterReservation.bind(null)
    );
  };

  const filter = () => {
    let queryString = "?";
    if (res_id.current.value !== "") {
      queryString += `res_id=${res_id.current.value}&`;
    }
    if (car_id.current.value !== "") {
      queryString += `car_id=${car_id.current.value}&`;
    }
    if (customer_id.current.value !== "") {
      queryString += `customer_id=${customer_id.current.value}&`;
    }
    if (res_date.current.value !== "") {
      queryString += `res_date=${res_date.current.value}&`;
    }
    if (return_date.current.value !== "") {
      queryString += `return_date=${return_date.current.value}&`;
    }

    handleFiltering(queryString);
  };

  return (
    <div>
      

      <br />
      <label className={labelstyles.label}>Reservation Id</label>
      <CustomInput
        labelText="res_id"
        id="res_id"
        handleChange={() => {}}
        type="text"
        ref={res_id}
      />
      <label className={labelstyles.label}>Car Id</label>
      <CustomInput
        labelText="car_id"
        id="car_id"
        handleChange={() => {}}
        type="text"
        ref={car_id}
      />
      <label className={labelstyles.label}>Customer Id</label>
      <CustomInput
        labelText="customer_id"
        id="customer_id"
        handleChange={() => {}}
        type="text"
        ref={customer_id}
      />
      <label className={labelstyles.label}>Reservation Date</label>
      <CustomInput
        labelText="res_date"
        id="res_date"
        handleChange={() => {}}
        type="text"
        ref={res_date}
      />
      <label className={labelstyles.label}>Return Date</label>
      <CustomInput
        labelText="return_date"
        id="return_date"
        handleChange={() => {}}
        type="text"
        ref={return_date}
      />
      <CustomButton onClicked={filter}>Filter</CustomButton>

      {reservations.map((reservation) => {
        return (
          <div key={reservation.res_id}>
            <h1>Reservation Id :{reservation.res_id}</h1>
            <h1>Car Id : {reservation.car_id}</h1>
            <h1>Customer Id :{reservation.customer_id}</h1>
            <h1>Reservation date :{reservation.res_date}</h1>
            <h1>Return Date :{reservation.return_date}</h1>
            <br></br>
          </div>
        );
      })}

    </div>
  );
};

export default ReservationSearchScreen;

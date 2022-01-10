import React, { useEffect, useState, useContext, useRef } from "react";
import useHttp from "../../hooks/use-http";
import labelstyles from "../../styles/label.module.css";
import CustomInput from "../../components/UI/CustomInput";
import CustomButton from "../../components/UI/CustomButton";

const CustomerReservationsReport = () => {
  const { isLoading, error, sendRequest } = useHttp();

  const [customerReservation, setReservations] = useState([]);

  const customer_id = useRef();

  const filterCustomer = (responseData) => {
    console.log(responseData);
    if (responseData) {
      let reservationsArr = [];
      for (let i = 0; i < responseData.length; i++) {
        reservationsArr.push(responseData[i]);
      }

      setReservations(reservationsArr);
    }
  };

  const handleFiltering = async (queryString) => {
    const token = localStorage.getItem("token");
    const response = await sendRequest(
      {
        url: "http://localhost:5000/api/v1/reports/customer/" + customer_id.current.value,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      },
      filterCustomer.bind(null)
    );
  };


  return (
    <div>
     

      <br />
      <label className={labelstyles.label}>Customer Id</label>
      <CustomInput
        labelText="CustomerId"
        id="CustomerId"
        handleChange={() => {}}
        type="text"
        ref={customer_id}
      />
      <CustomButton onClicked={handleFiltering}>Filter</CustomButton>

      {customerReservation.map((reservation) => {
        return (

          <div key={reservation.Customer.customer_id}>
            <br></br>
            <h3>Reservation Id: {reservation.res_id}</h3>
            <h3>Reservation Date: {reservation.res_date}</h3>
            <h3>Return Date: {reservation.return_date}</h3>
            <h3>Customer Id: {reservation.Customer.customer_id}</h3>
            <h3>Customer Name: {reservation.Customer.Account.name}</h3>
            <h3>Customer email: {reservation.Customer.Account.email}</h3>
            <h3>Plate Id: {reservation.Car.plate_id}</h3>
            <h3>Model: {reservation.Car.CarDescription.model}</h3>
            <br></br>
          </div>
        );
      })}

    </div>
  );
};

export default CustomerReservationsReport;

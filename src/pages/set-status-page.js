import React, { useEffect, useState, useContext, useRef } from "react";
import useHttp from "../hooks/use-http";
import { useLocation, useNavigate } from "react-router-dom";
import CustomInput from "../components/UI/CustomInput";

const SetStatusPage = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const { state } = useLocation();
  const car = state;

  const navigate = useNavigate();

  const status = useRef();

  const cx = (data) => {
    console.log(data);
    navigate("/edit-car-status");
  };

  const updateStatus = async () => {
    const token = localStorage.getItem("token");

    const reqBody = {
      status: status.current.value,
    };

    const response = await sendRequest(
      {
        url: "http://localhost:5000/api/v1/car-statuses/" + car.car_id,
        method: "PUT",
        body: reqBody,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      },
      cx.bind(response)
    );

    alert("car status edited");
  };

  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ color: "white" }}>Set Status</h1>
      <h2 style={{ color: "white" }}>current: {car.CarStatus.status}</h2>
      <br />
      <br />
      <label style={{ color: "white" }}>new status: </label>
      <CustomInput ref={status} labelText="status" id="status" type="text" />
      <br />
      <button
        style={{
          height: 100,
          width: 500,
          backgroundColor: "blue",
          color: "white",
        }}
        onClick={updateStatus}
      >
        update status
      </button>
    </div>
  );
};

export default SetStatusPage;

import React, { useEffect, useState, useContext, useRef } from "react";
import useHttp from "../hooks/use-http";
import AccountContext from "../models/account";
import CarDescItem from "../components/UI/CarDescItem";
import CustomInput from "../components/UI/CustomInput";
import { Button } from "@material-ui/core";

import "./desc.css";

const NewCarDescScreen = () => {
  const [carDescs, setCarDescs] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();
  const accCtx = useContext(AccountContext);

  const model = useRef();
  const year = useRef();
  const brand = useRef();
  const color = useRef();
  const transmission = useRef();
  const type = useRef();
  const image = useRef();

  useEffect(async () => {
    const setCarData = (responseData) => {
      if (responseData) {
        let carsArray = [];
        for (let i = 0; i < responseData.length; i++) {
          carsArray.push(responseData[i]);
        }
        setCarDescs(carsArray);
      }
    };

    const getCarDescs = async () => {
      const token = localStorage.getItem("token");
      const response = await sendRequest(
        {
          url: "http://localhost:5000/api/v1/car-descriptions",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        },
        setCarData.bind(null)
      );
    };

    await getCarDescs();
  }, []);

  const cx = (data) => {
    console.log(data);
  };

  const createCarDesc = async () => {
    const token = localStorage.getItem("token");
    console.log(token);

    const reqBody = {
      model: model.current.value,
      year: year.current.value,
      transmission: transmission.current.value,
      color: color.current.value,
      type: type.current.value,
      brand: brand.current.value,
      image: image.current.value,
    };

    const response = await sendRequest(
      {
        url: "http://localhost:5000/api/v1/car-descriptions",
        method: "POST",
        body: reqBody,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      },
      cx.bind(null)
    );

    alert("new car description created");
  };

  const labelStyle = {
    color: "white",
  };

  return (
    <div style={{ padding: 30 }}>
      <div className="carGrid">
        {carDescs.map((carDesc) => (
          <CarDescItem key={carDesc.car_description_id} carDesc={carDesc} />
        ))}
      </div>

      <label style={labelStyle}> model : </label>
      <CustomInput ref={model} labelText="Model" id="model" type="text" />
      <label style={labelStyle}> year : </label>
      <CustomInput ref={year} labelText="year" id="year" type="text" />
      <label style={labelStyle}> brand : </label>
      <CustomInput ref={brand} labelText="brand" id="brand" type="text" />
      <label style={labelStyle}> color : </label>
      <CustomInput ref={color} labelText="color" id="color" type="text" />
      <br />
      <label style={labelStyle}> transmission : </label>
      <CustomInput
        ref={transmission}
        labelText="transmission"
        id="transmission"
        type="text"
      />
      <label style={labelStyle}> type : </label>
      <CustomInput ref={type} labelText="type" id="type" type="text" />
      <label style={labelStyle}> image : </label>
      <CustomInput ref={image} labelText="image" id="image" type="text" />
      <br />

      <button
        style={{
          width: 300,
          height: 100,
          color: "white",
          backgroundColor: "blue",
        }}
        onClick={createCarDesc}
      >
        Create new car description
      </button>
    </div>
  );
};

export default NewCarDescScreen;

import React, { useEffect, useState, useContext, useRef } from "react";
import useHttp from "../hooks/use-http";
import AccountContext from "../models/account";
import CarDescItem from "../components/UI/CarDescItem";
import CustomInput from "../components/UI/CustomInput";
import { Button } from "@material-ui/core";

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
      const response = await sendRequest(
        {
          url: "http://localhost:5000/api/v1/car-descriptions",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accCtx.token,
          },
        },
        setCarData.bind(null)
      );
    };

    await getCarDescs();
  }, []);

  const createCarDesc = async () => {
    const response = await sendRequest({
      url: "http://localhost:5000/api/v1/car-descriptions",
      method: "POST",
      body: {
        model,
        year,
        transmission,
        color,
        type,
        brand,
        image,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accCtx.token,
      },
    });

    alert("new car description created");
  };

  return (
    <div>
      <h1>New Desc Car Screen</h1>

      {carDescs.map((carDesc) => (
        <CarDescItem carDesc={carDesc} />
      ))}

      <label> model</label>
      <CustomInput ref={model} labelText="Model" id="model" type="text" />
      <br />
      <label> year</label>
      <CustomInput ref={year} labelText="year" id="year" type="text" />
      <br />
      <label> brand</label>
      <CustomInput ref={brand} labelText="brand" id="brand" type="text" />
      <br />
      <label> color</label>
      <CustomInput ref={color} labelText="color" id="color" type="text" />
      <br />
      <label> transmission</label>
      <CustomInput
        ref={transmission}
        labelText="transmission"
        id="transmission"
        type="text"
      />
      <br />
      <label> type</label>
      <CustomInput ref={type} labelText="type" id="type" type="text" />
      <br />
      <label> image</label>
      <CustomInput ref={image} labelText="image" id="image" type="text" />
      <br />

      <Button onClick={() => createCarDesc()}>
        Create new car description
      </Button>
    </div>
  );
};

export default NewCarDescScreen;

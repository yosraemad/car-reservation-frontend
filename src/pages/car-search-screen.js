import React, { useEffect, useState, useContext, useRef } from "react";
import CustomInput from "../components/UI/CustomInput";
import CustomButton from "../components/UI/CustomButton";
import labelstyles from "../styles/label.module.css";
import useHttp from "../hooks/use-http";
import CarDescItem from "../components/UI/CarDescItem";

const CarSearchScreen = () => {

  const { isLoading, error, sendRequest } = useHttp();

  const [car, setCars] = useState([]);

  const brandRef = useRef();
  const modelRef = useRef();
  const yearRef = useRef();
  const colorRef = useRef();
  const transmissionRef = useRef();
  const typeRef = useRef();
  const imageRef = useRef();

  const filterCar = (responseData) => {
    console.log(responseData);
    if (responseData) {
      let carArr = [];
      for (let i = 0; i < responseData.length; i++) {
        carArr.push(responseData[i]);
      }

      setCars(carArr);
    }
  };

  
  const handleFiltering = async (queryString) => {
    const token = localStorage.getItem("token");
    const response = await sendRequest(
      {
        url: "http://localhost:5000/api/v1/cars" + queryString,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      },
      filterCar.bind(null)
    );
  };

  const filter = () => {
    let queryString = "?";
    if (brandRef.current.value !== "") {
      queryString += `brand=${brandRef.current.value}&`;
    }
    if (modelRef.current.value !== "") {
      queryString += `model=${modelRef.current.value}&`;
    }
    if (yearRef.current.value !== "") {
      queryString += `year=${yearRef.current.value}&`;
    }
    if (colorRef.current.value !== "") {
      queryString += `color=${colorRef.current.value}&`;
    }
    if (transmissionRef.current.value !== "") {
      queryString += `transmission=${transmissionRef.current.value}&`;
    }
    if (typeRef.current.value !== "") {
      queryString += `type=${typeRef.current.value}&`;
    }
    if (imageRef.current.value !== "") {
      queryString += `image=${imageRef.current.value}&`;
    }
    handleFiltering(queryString);
    // handleFilter
    // props.handleFilter(queryString);
  };

  return (
    
   
    <div>
    

      <label className={labelstyles.label}>Brand</label>
      <CustomInput
        labelText="brand"
        id="brand"
        handleChange={() => {}}
        type="text"
        ref={brandRef}
      />
      <label className={labelstyles.label}>Model</label>
      <CustomInput
        labelText="model"
        id="model"
        handleChange={() => {}}
        type="text"
        ref={modelRef}
      />
      <label className={labelstyles.label}>Year</label>
      <CustomInput
        labelText="year"
        id="year"
        handleChange={() => {}}
        type="text"
        ref={yearRef}
      />
      <label className={labelstyles.label}>Color</label>
      <CustomInput
        labelText="color"
        id="color"
        handleChange={() => {}}
        type="text"
        ref={colorRef}
      />
      <label className={labelstyles.label}>Transmission</label>
      <CustomInput
        labelText="transmission"
        id="transmission"
        handleChange={() => {}}
        type="text"
        ref={transmissionRef}
      />
      <label className={labelstyles.label}>Type</label>
      <CustomInput
        labelText="type"
        id="type"
        handleChange={() => {}}
        type="text"
        ref={typeRef}
      />
      <label className={labelstyles.label}>Image</label>
      <CustomInput
        labelText="image"
        id="image"
        handleChange={() => {}}
        type="text"
        ref={imageRef}
      />
      <CustomButton onClicked={filter}>Filter</CustomButton>


      
      {car.map((car) => (
        <div key={car.car_id}>
          <h4> car number : {car.car_id} </h4>
          <h4> status : {car.CarStatus.status} </h4>
         <CarDescItem  carDesc={car.CarDescription} />
        </div>
      ))}
      
      
    </div>
  );
};

export default CarSearchScreen;

import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import CarItem from "../UI/caritem";

import styles from "../../styles/cars.module.css";

const AvailableCars = (props) => {
  const [cars, setCars] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(async () => {
    const setCarData = (responseData) => {
      if (responseData) {
        let carsArray = [];
        for (let i = 0; i < responseData.length; i++) {
          carsArray.push(responseData[i]);
        }
        setCars(carsArray);
      }
    };
    const getCars = async () => {
      const response = await sendRequest(
        {
          url: "http://localhost:5000/api/v1/office-cars/details",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + props.token,
          },
        },
        setCarData.bind(null)
      );
    };
    await getCars();
  }, []);

  const carItems = cars.map((car) => {
    return <CarItem key={car.car_id} carDescription={car.Car.CarDescription} />;
  });

  return <div className={styles.cars}>{carItems}</div>;
};

export default AvailableCars;

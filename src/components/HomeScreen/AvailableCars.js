import React, { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import CarItem from "../UI/caritem";

import styles from "../../styles/cars.module.css";

const AvailableCars = (props) => {
  const carItems = props.cars.map((car) => {
    return (
      <CarItem
        key={car.car_id}
        officeCar={car}
        carDescription={car.Car.CarDescription}
      />
    );
  });

  return <div className={styles.cars}>{carItems}</div>;
};

export default AvailableCars;

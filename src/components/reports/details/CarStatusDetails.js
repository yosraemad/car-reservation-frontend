import React from "react";

const CarStatusDetails = (props) => {
  const car = props.car;
  return (
    <div>
      <p>Car ID: {car.car_id}</p>
      <p>Car Status: {car.status}</p>
      <hr></hr>
    </div>
  );
};

export default CarStatusDetails;

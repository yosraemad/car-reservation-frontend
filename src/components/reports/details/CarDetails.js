import React from "react";

const CarDetails = (props) => {
  const car = props.car;
  return (
    <div>
      <p>Reservation id: {car.res_id}</p>
      <p>Customer id: {car.customer_id}</p>
      <p>Price: {car.Payment.amount}</p>
      <p>Reservation Date: {car.res_date}</p>
      <p>Pickup Date: {car.Pickup.pickup_date}</p>
      <p>Return Date: {car.return_date}</p>
      <hr />
    </div>
  );
};

export default CarDetails;

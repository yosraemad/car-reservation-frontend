import React from "react";

const ReservationDetails = (props) => {
  const res = props.res;
  return (
    <div>
      <p>Car id: {res.car_id}</p>
      <p>Customer id: {res.Customer.customer_id}</p>
      <p>Customer Phone Number: {res.Customer.phone}</p>
      <p>Price: {res.Payment.amount}</p>
      <p>Reservation Date: {res.res_date}</p>
      <p>Pickup Date: {res.Pickup.pickup_date}</p>
      <p>Return Date: {res.return_date}</p>
      <hr />
    </div>
  );
};

export default ReservationDetails;

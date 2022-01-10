import React from "react";
import { useNavigate } from "react-router-dom";

const AdminScreen = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Admin Screen</h1>
      <button onClick={() => navigate("/new-car-desc")}>create car</button>
      <button onClick={() => navigate("/customer-search")}> 
        Customer advanced search
      </button>
      <button onClick={() => navigate("/car-search")}> 
        Car advanced search
      </button>
      <button onClick={() => navigate("/reservation-search")}> 
        Reservation advanced search
      </button>
      <button onClick={() => navigate("/edit-car-status")}>
        Edit Car status
      </button>
    </div>
  );
};

export default AdminScreen;

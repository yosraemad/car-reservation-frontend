import React from "react";
import { useNavigate } from "react-router-dom";

const AdminScreen = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    background: "#3e64ff",
    "border-color": "#3e64ff",
    color: "#fff",
    width: 200,
    height: 100,
    margin: 40,
    fontSize: 20,
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "white", fontFamily: "sans-serif", fontSize: 30 }}>
        Welcome to the admin dashboard
      </h1>
      <button style={buttonStyle} onClick={() => navigate("/new-car-desc")}>
        create car
      </button>
      <br />
      <button style={buttonStyle} onClick={() => navigate("/customer-search")}>
        Customer advanced search
      </button>
      <br />

      <button style={buttonStyle} onClick={() => navigate("/edit-car-status")}>
        Edit Car Status
      </button>

      <br />
      <button style={buttonStyle} onClick={() => navigate("/car-search")}>
        Car advanced search
      </button>

      <br />
      <button
        style={buttonStyle}
        onClick={() => navigate("/reservation-search")}
      >
        Reservation advanced search
      </button>

      <button style={buttonStyle} onClick={() => navigate("/reports")}>
        Reports
      </button>
    </div>
  );
};

export default AdminScreen;

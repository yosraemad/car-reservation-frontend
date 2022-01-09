import React from "react";
import { useNavigate } from "react-router-dom";

const AdminScreen = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Admin Screen</h1>
      <button onClick={() => navigate("/new-car-desc")}>create car</button>
    </div>
  );
};

export default AdminScreen;

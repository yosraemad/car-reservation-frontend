import React, { useState, useContext, useEffect } from "react";
import CarItem from "../components/UI/caritem";
import { Link, useNavigate } from "react-router-dom";
import AccountContext from "../models/account";
import AvailableCars from "../components/HomeScreen/AvailableCars";
import useHttp from "../hooks/use-http";
import Filters from "../components/HomeScreen/Filters";

const HomeScreen = () => {
  const accCtx = useContext(AccountContext);
  const [cars, setCars] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();
  const [offices, setOffices] = useState([]);

  const navigate = useNavigate();

  useEffect(async () => {
    const setCarData = (responseData) => {
      if (responseData) {
        let carsArray = [];
        for (let i = 0; i < responseData.length; i++) {
          carsArray.push(responseData[i]);
        }
        setCars(carsArray);
        console.log(carsArray);
      }
    };
    const getCars = async () => {
      const response = await sendRequest(
        {
          url: "http://localhost:5000/api/v1/office-cars/details",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
        setCarData.bind(null)
      );
    };

    const setOfficeData = (responseData) => {
      if (responseData) {
        let officesArray = [];
        for (let i = 0; i < responseData.length; i++) {
          officesArray.push(responseData[i]);
        }
        setOffices(officesArray);
      }
    };

    const getOffices = async () => {
      const response = await sendRequest(
        {
          url: "http://localhost:5000/api/v1/offices",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
        setOfficeData.bind(null)
      );
    };
    await getCars();
    await getOffices();
  }, []);

  const handleLogout = () => {
    accCtx.setAccount({}, null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return accCtx.token || localStorage.getItem("token") ? (
    <>
      <div style={{ padding: 50 }}>
        <button
          style={{
            width: 300,
            height: 30,
            backgroundColor: "navy",
            color: "white",
          }}
          onClick={handleLogout}
        >
          Logout
        </button>

        <Filters
          offices={offices}
          currentOffice={cars[0] && cars[0].office_id}
          setCars={setCars}
          token={localStorage.getItem("token")}
        />
        <AvailableCars cars={cars} />
        <br />
      </div>
    </>
  ) : (
    <h1>
      Please <Link to="/">login</Link> to view available cars
    </h1>
  );
};

export default HomeScreen;

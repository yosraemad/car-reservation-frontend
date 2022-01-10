import React, { useEffect, useState, useContext, useRef } from "react";
import useHttp from "../hooks/use-http";
import { useLocation, useNavigate } from "react-router-dom";
import CustomInput from "../components/UI/CustomInput";
import { Button, Menu, MenuItem } from "@mui/material";

const CreateCarOfficeScreen = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [offices, setOffices] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentOffice, setCurrentOffice] = useState(null);
  const plate_id = useRef();
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const cx = (data) => {
    console.log(data);
    navigate("/new-car-desc");
  };

  const createOfficeCar = async () => {
    const token = localStorage.getItem("token");

    console.log(currentOffice);
    console.log(state);

    const reqBody = {
      office_id: currentOffice,
      car_description_id: state.car_description_id,
      plate_id: plate_id.current.value,
    };

    const response = await sendRequest(
      {
        url: "http://localhost:5000/api/v1/office-cars/carDesc",
        method: "POST",
        body: reqBody,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      },
      cx.bind(null)
    );

    alert("new car car offices created");
  };

  useEffect(async () => {
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

    await getOffices();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ color: "white" }}>Create Car Office screen</h1>
      <br />
      <label style={{ color: "white" }}>plate_id: </label>
      <CustomInput ref={plate_id} type="text" id="plate_id"></CustomInput>
      <br />
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Choose Office
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {offices.map((office) => {
          return (
            <MenuItem
              key={office.office_id}
              onClick={() => {
                setCurrentOffice(office.office_id);
                handleClose();
              }}
            >
              {office.office_id + ": " + office.address}
            </MenuItem>
          );
        })}
      </Menu>
      <br />
      <br />
      <br />
      <button
        style={{ height: 100, color: "white", backgroundColor: "blue" }}
        onClick={createOfficeCar}
      >
        create car assoicated with the office
      </button>
    </div>
  );
};

export default CreateCarOfficeScreen;

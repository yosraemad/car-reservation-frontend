import React, { useState } from "react";
import labelstyles from "../../styles/label.module.css";
import { Button, Menu, MenuItem } from "@mui/material";
import CarDescriptionFilters from "./CarDescriptionFilters";
import useHttp from "../../hooks/use-http";

const Filters = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentOffice, setCurrentOffice] = useState(null);
  const { isLoading, error, sendRequest } = useHttp();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const filterCars = (responseData) => {
    console.log(responseData);
    if (responseData) {
      let carsArray = [];
      for (let i = 0; i < responseData.length; i++) {
        carsArray.push(responseData[i]);
      }
      props.setCars(carsArray);
    }
  };

  const handleFiltering = async (queryString) => {
    if (currentOffice !== null) {
      queryString += `office_id=${currentOffice}`;
    }
    const response = await sendRequest(
      {
        url: "http://localhost:5000/api/v1/office-cars/details" + queryString,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + props.token,
        },
      },
      filterCars.bind(null)
    );
  };

  return (
    <div>
      <label className={labelstyles.label}></label>
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
        {props.offices.map((office) => {
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
      <CarDescriptionFilters handleFilter={handleFiltering} />
    </div>
  );
};

export default Filters;

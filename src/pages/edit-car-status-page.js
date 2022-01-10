import React, { useEffect, useState, useContext } from "react";
import useHttp from "../hooks/use-http";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";

const EditCarStatusPage = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [cars, setCars] = useState([]);
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
          url: "http://localhost:5000/api/v1/cars",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
        setCarData.bind(response)
      );
    };

    await getCars();
  }, []);

  return (
    <div>
      <h1>Edit Car Status page</h1>

      {cars.map((car) => (
        <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="160"
              image={car.CarDescription.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                car id: {car.car_id}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                plate id: {car.plate_id}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                brand: {car.CarDescription.brand}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                model: {car.CarDescription.model}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                year: {car.CarDescription.year}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                type: {car.CarDescription.type}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                trans: {car.CarDescription.transmission}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                color: {car.CarDescription.color}
              </Typography>
              <Typography gutterBottom variant="h4" color="text.secondary">
                status: color: {car.CarStatus.status}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              onClick={() => navigate("/set-status", { state: car })}
              size="small"
              color="primary"
            >
              Edit Status
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default EditCarStatusPage;

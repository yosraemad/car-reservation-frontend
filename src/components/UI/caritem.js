import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CarItem = (props) => {
  const { carDescription, officeCar } = props;
  const navigate = useNavigate();
  const handleCarClick = () => {
    navigate(`/reservation`, { state: { officeCar } });
  };
  return (
    <Card sx={{ maxWidth: 400 }} onClick={handleCarClick}>
      <CardActionArea>
        <CardMedia component="img" height="160" image={carDescription.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {carDescription.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {carDescription.model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {carDescription.color}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Reserve
        </Button>
      </CardActions>
    </Card>
  );
};

export default CarItem;

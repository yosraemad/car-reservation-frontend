import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CarDescItem = (props) => {
  const { carDesc } = props;
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia component="img" height="160" image={carDesc.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {carDesc.brand}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {carDesc.model}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {carDesc.year}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {carDesc.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {carDesc.transmission}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {carDesc.color}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => navigate("/create-office-car", { state: carDesc })}
          size="small"
          color="primary"
        >
          Create car
        </Button>
      </CardActions>
    </Card>
  );
};

export default CarDescItem;

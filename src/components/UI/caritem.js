import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const CarItem = (props) => {
  const { carDescription } = props;
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://www.1auto.co/storage/ready_for_sales/20210914113121_photo-1552519507-da3b142c6e3d.jpg"
        />
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

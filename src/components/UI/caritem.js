import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CarItem = (props) =>{
    const { carBrand, carStatus, carModel} = props;
    return (
        <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="160"
          image="https://www.1auto.co/storage/ready_for_sales/20210914113121_photo-1552519507-da3b142c6e3d.jpg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {carBrand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {carStatus}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Reserve</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
}

export default CarItem

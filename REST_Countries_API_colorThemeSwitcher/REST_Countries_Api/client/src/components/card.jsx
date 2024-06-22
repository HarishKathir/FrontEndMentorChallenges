import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const card = ({ data }) => {
 
    const {flags, name , population , region , capital} = data;

  return (
    <div>
      <Card sx={{ maxWidth: 345 , marginBottom: "20px", textAlign: "left" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={flags.svg || flags.png}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"bold"}}>
              {name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Population : {population}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Region: {region}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Capital : {capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default card;

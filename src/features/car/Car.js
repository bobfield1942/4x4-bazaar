import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from 'react-redux';
import {remove, add} from './carsSlice'


export default function Car({car}) {

  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

  const classes = useStyles();
 

console.log(car)

  return (

  
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={car.imgsrc}
                    title={car.make + ' ' + car.model}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {car.make + ' ' + car.model + '(' + car.year +')'}
                    </Typography>
                    <Typography>
                     {car.details}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => dispatch(add(car))}>
                      Add Car
                    </Button>
                    <Button size="small" color="primary" onClick={() => dispatch(remove(car.id))}>
                     Remove Car
                    </Button >
                  </CardActions>
                </Card>
       
  );
}

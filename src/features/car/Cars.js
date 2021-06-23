import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCars } from "./carsSlice";
import styles from "./car.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Car from "./Car";


export default function Cars() {

  const state = useSelector(selectCars);
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

  return (
    <div>
            <div className={styles.row}>
                <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                  {state.cars.map((c) => (
                      <Grid item key={c} xs={12} sm={6} md={4}>
                    <Car car={c} />
                    </Grid>
                    ))}
                  </Grid>
                </Container>
            </div>
    </div>
  );
}

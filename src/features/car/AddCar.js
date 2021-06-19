import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { selectCars, add } from "./carsSlice";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const state = useSelector(selectCars);

  const [cmake, setCmake] = useState("");
  const [cmodel, setCmodel] = useState("");
  const [cyear, setCyear] = useState("");
  const [cdetails, setCdetail] = useState("");
  const [cprice, setCprice] = useState("");
  const [cimage, setCimage] = useState("Please Select");

  const carImages= [
    {name: "Hilux",src="./images/toyota-hilux-1986.jpg"},
    {name: "Jimny",src="./images/jimny.jpg"},
    {name: "Grenadier",src="./images/ineos.jpg"},
    {name: "Defender",src="./images/defender.jpg"},
    {name: "Land Cruiser",src="./images/landcruiser.jpg"},
    {name: "Jeep",src="./images/jeep.jpg"},

  ]

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
console.log(cmodel)
    dispatch(add({car:{
      id: (state.cars.length + 1),
      make: cmake,
      model: cmodel,
      year: cyear,
      details: cdetails,
      price: cprice.toString(),
      imgsrc: "./images/landcruiser.jpg"
    }}))
    setOpen(false);
  };
  const handleChange = (e) => {
    switch (e.target.id) {
      case "make":
        setCmake(e.target.value);
        break;
      case "model":
        setCmodel(e.target.value);
        break;
      case "year":
        setCyear(e.target.value);
        break;
      case "details":
        setCdetail(e.target.value);
        break;
      case "price":
        setCprice(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Sell your vehicle
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="make"
            label="Make"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="model"
            label="Model"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="year"
            label="Year"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="details"
            label="Details"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="price"
            label="Price"
            type="number"
            fullWidth
            onChange={handleChange}
          />
          <Select
             label="Image"
          labelId="image"
          id="image"
          value={age}
          onChange={handleChange}
        ></Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            type="submit"
            label="Submit"
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

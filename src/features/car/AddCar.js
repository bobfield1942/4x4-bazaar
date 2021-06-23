import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel  from '@material-ui/core/InputLabel';
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

  const [newCar, setNewCar] = useState({
    make: "",
    model: "",
    year: "",
    details: "",
    price: "",
    imgsrc: "./images/placeholder.jpg" ,
  });



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    dispatch(
      add({
        car: {
          id: state.cars.length + 1,
          make: newCar.make,
          model: newCar.model,
          year: newCar.year,
          details: newCar.details,
          price: newCar.price.toString(),
          imgsrc: newCar.imgsrc,
        },
      })
    );
    setOpen(false);
  };
  const handleChange = (e) => {
    setNewCar({ ...newCar, [e.target.id]: e.target.value });
  };

  const handleSelect = (event) => {
    setNewCar({ ...newCar, imgsrc: event.target.value });
  };


  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Sell your vehicle - Total Cars {(state && state.cars.length || 0)} 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add your car</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To ADD a vehicle to the listing, please fill in the details below
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
          <InputLabel id="image-label">Photo</InputLabel>
          <Select
            label="Image"
            labelId="image-label"
            id="image"
            value={newCar && newCar.imgsrc}
            onChange={handleSelect}
          >
           <MenuItem value={"./images/placeholder.jpg"}>None</MenuItem>
            <MenuItem value={"./images/toyota-hilux-1986.jpg" }>Hilux</MenuItem>
            <MenuItem value={"./images/jimny.jpg" }>Jimny</MenuItem>
            <MenuItem value={"./images/ineos.jpg" }>Grenadier</MenuItem>
            <MenuItem value={"./images/defender.jpg" }>Defender</MenuItem>
            <MenuItem value={"./images/landcruiser.jpg" }>Land Cruiser</MenuItem>
            <MenuItem value={"./images/jeep.jpg" }>Jeep</MenuItem>
          </Select>
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

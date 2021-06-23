import { useSelector, useDispatch } from "react-redux";
import { setUser, logout, selectUser } from "./userSlice";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Avatar } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
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
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url('./images/landing.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [userValues, setUserValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    dispatch(
      setUser({
        user: {
          firstname: userValues.firstname,
          lastname: userValues.lastname,
          email: userValues.email,
        },
      })
    );
    setOpen(false);
  };
  const handleChange = (e) => {
    setUserValues({ ...userValues, [e.target.id]: e.target.value });
  };

  return (
    <div>
      {user ? (
        <>
          <Grid container spacing={1}>
            <Grid item>
              <Avatar className={classes.orange}>
                {user &&
                  user.firstname.substr(0, 1) + user.lastname.substr(0, 1)}
              </Avatar>
            </Grid>
            {/*<Grid item>{user.email}</Grid>*/}
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => dispatch(logout())}
              >
                Log Out
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Log In
        </Button>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Log In to this website, please fill in the details below:
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="firstname"
            label="First Name"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="lastname"
            label="Last Name"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            label="Email"
            type="text"
            fullWidth
            onChange={handleChange}
          />
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

export default Login;

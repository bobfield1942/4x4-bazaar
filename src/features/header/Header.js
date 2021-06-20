import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import Login from  "../user/Login";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector, useDispatch } from "react-redux";
import { selectCars,update  } from "../car/carsSlice";

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      position:'sticky'
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },


  }));



function Header() {

  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const state = useSelector(selectCars);

    const classes = useStyles();

    const handleChange = (e) => {

        //Add funtionality for search
    };
    
    return (

        <div className='header'>
            <div>
            <img  className="header__icon"
                 src={'./images/logo2.jpg'} />
            </div>
            <div className='header__center'>
                <input type="text" placeholder="Search by Make" onChange={handleChange}/>
                <SearchIcon/>
            </div>
            <div className='header__right'>
                <Login/>
            </div>
        </div>
    
    )
}

export default Header

import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import {Avatar} from "@material-ui/core"
import Login from  "../user/Login";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

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

    const classes = useStyles();
    
    return (

        <div className='header'>
            <div>
            <img  className="header__icon"
                 src={'./images/logo2.jpg'} />
            </div>
            <div className='header__center'>
                <input type="text" />
                <SearchIcon/>
            </div>
            <div className='header__right'>
                <Login/>
            </div>
        </div>
    
    )
}

export default Header

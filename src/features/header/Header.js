import React from 'react'
import './Header.css'
import logo from './logo-temp.png'; 
import SearchIcon from "@material-ui/icons/Search"
import {Avatar} from "@material-ui/core"
import Login from  "../user/Login";

function Header() {
    return (
        <div className='header'>
            <div>
            <img  className="header__icon"
                 src={logo} />
            </div>
            <div className='header__center'>
                <input type="text" />
                <SearchIcon/>
            </div>
            <div className='header__right'>
                <Login/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header

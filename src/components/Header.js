import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { AppBar, Toolbar,Typography,Button, IconButton } from '@material-ui/core';
import { HeaderStyles } from '../styles/Header';
import { NavLink } from 'react-router-dom';
import { GitHub, Home } from '@material-ui/icons';


const Header = ({isAuth}) => {

     const classes = HeaderStyles()
    return (
            <AppBar position = "fixed">
<Toolbar  className = {classes.nav} >
    <Typography variant = "h6">
        Taskhub
    </Typography>
    <div>

           <IconButton to = "/" color = "inherit" component = {NavLink}>
               <Home />
           </IconButton>
        <IconButton href = "#" color = "inherit">
            <GitHub  />
        </IconButton>
      

    </div>
</Toolbar>
            </AppBar>
    )
}

Header.propTypes = {

    isAuth:PropTypes.bool.isRequired
}

export default Header

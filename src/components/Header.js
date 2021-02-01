import React from 'react'
import { AppBar, Toolbar,Typography, IconButton } from '@material-ui/core';
import { HeaderStyles } from '../styles/Header';
import { NavLink } from 'react-router-dom';
import { GitHub, Home } from '@material-ui/icons';
import {BASEURL} from '../CONSTANTS'

const Header = () => {

     const classes = HeaderStyles()
    return (
            <AppBar position = "fixed">
<Toolbar  className = {classes.nav} >
    <Typography variant = "h6">
        Taskhub
    </Typography>
    <div>

           <IconButton to = {BASEURL} color = "inherit" component = {NavLink}>
               <Home />
           </IconButton>
        <IconButton href = {`https://github.com/kingfishergod/${BASEURL}`} color = "inherit">
            <GitHub  />
        </IconButton>
      

    </div>
</Toolbar>
            </AppBar>
    )
}

export default Header

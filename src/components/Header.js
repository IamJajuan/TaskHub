import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { AppBar, Toolbar,Typography,Button } from '@material-ui/core';
import { HeaderStyles } from '../styles/Header';
import { NavLink } from 'react-router-dom';


const Header = ({isAuth}) => {

     const classes = HeaderStyles()
    return (
        <header>
            <AppBar position = "static">
<Toolbar  className = {classes.nav} >
    <Typography variant = "h6">
        Taskhub
    </Typography>
    <div>
       {isAuth ? <Fragment>
           <Button to = "/" color = "inherit" component = {NavLink}>
               Home
           </Button>
        <Button color = "inherit" >Logout </Button>
       </Fragment> : <Fragment></Fragment>}

    </div>
</Toolbar>
            </AppBar>
        </header>
    )
}

Header.propTypes = {

    isAuth:PropTypes.bool.isRequired
}

export default Header

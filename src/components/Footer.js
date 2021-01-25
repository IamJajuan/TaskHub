import {Typography,Button, Toolbar } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'
import React from 'react'
import { FooterStyles } from '../styles/Footer'

const Footer = () => {
    const classes = FooterStyles()
    return (
        <footer className = {[classes.footer]}>
            <Toolbar className = {classes.footerContainer}  >
<Typography variant = "body1" >
Built by Jajuan Hall
</Typography>
<Button
       
        className={classes.footerBtn}
        startIcon={<GitHub />}
      >
        Github
      </Button>
            </Toolbar>
        </footer>
    )
}

export default Footer

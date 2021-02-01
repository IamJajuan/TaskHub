import { Box, Button, Container, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { GlobalStyles } from '../styles/Global'
import {BASEURL} from '../CONSTANTS'
const NotFound = () => {

    const classes = GlobalStyles()
    return (
       
        <Container  maxWidth = "sm">
        <Box display = "flex" flexDirection = "column" alignItems = "center">
        <Typography variant = "h1">
                404
            </Typography>
            <Typography variant = "h3">
Sorry, Page Not Found
            </Typography>
            <Button className = {classes.btn} to = {BASEURL} variant = "contained" color = "primary" component = {Link} >
                Go Back Home
            </Button>
        </Box>
        </Container>
    )
}

export default NotFound

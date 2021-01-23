import React from 'react'
import {  TextField,Button,Container,CssBaseline,Typography,Avatar,Grid,Link} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { GlobalStyles } from '../styles/Global';



const SignUp = () => {

    const classes = GlobalStyles();

    return (
        <Container className = {classes.container} maxWidth="sm">
        <CssBaseline />
 
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography className = {classes.title} component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  id="password2"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.btn}
            >
              Sign Up
            </Button>
            <Grid container >
              <Grid item>
                <Link component = {RouterLink} to = "/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>

      </Container>
    )
}

export default SignUp

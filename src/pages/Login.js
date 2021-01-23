import {  TextField,Button,Container,CssBaseline,Typography,Avatar,Grid,Link} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { GlobalStyles } from '../styles/Global';



const Login = () => {

    const classes = GlobalStyles()

    return (
        <Container className={classes.container}  maxWidth="sm">
      <CssBaseline />
        <Avatar className={classes.avatar}>
        <LockOutlined />
        </Avatar>
        <Typography className = {classes.title} component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.btn}
           
          >
         Login
          </Button>
          <Grid container>
          
            <Grid item>
              <Link component = {RouterLink} to = '/signup' variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
     
    </Container>
    )
}

export default Login
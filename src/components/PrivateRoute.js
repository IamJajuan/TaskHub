import React from 'react'
import {
     Redirect, Route, 
  } from "react-router-dom";

  import PropTypes from 'prop-types';


const PrivateRoute = ({isAuth,children,...rest}) => {
    return (
      <Route {...rest}  render={({ location }) =>
      isAuth ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    } />
    )
}

PrivateRoute.propTypes = {
    isAuth:PropTypes.bool.isRequired
}

export default PrivateRoute

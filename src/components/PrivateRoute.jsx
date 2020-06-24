import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
  // const isAuth = useSelector((state) => state.user.isAuthenticated);

  return localStorage.getItem('token') ? (
    <Route {...props}>{props.children}</Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;

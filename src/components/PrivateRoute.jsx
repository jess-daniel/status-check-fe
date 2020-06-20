import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = (props) =>
  localStorage.getItem('token') ? (
    <Route {...props}>{props.children}</Route>
  ) : (
    <Redirect to="/login" />
  );

const mapStateToProps = (state) => {
  return {
    auth: state.user.isAuthenticated,
  };
};

export default connect(mapStateToProps, null, null, { pure: false })(
  PrivateRoute
);

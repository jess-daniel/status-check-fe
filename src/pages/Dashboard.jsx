import React from 'react';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Profile from '../components/Profile';
import Upgrade from '../components/Upgrade';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    minHeight: '90vh',
    justifyContent: 'center',
  },
  dashContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '15%',
    border: '1px black solid',
    width: '80%',
  },
}));

// make a get request for the user's object
// nested routes for tabs

const Dashboard = () => {
  const classes = useStyles();
  let { path, url } = useRouteMatch();

  return (
    // The
    <div className={classes.root}>
      <div className={classes.dashContainer}>
        <p>Welcome Back, Name</p>
        <Link to={`${url}/profile`}>Profile</Link>
        <Link to={`${url}/upgrade`}>Upgrade</Link>
      </div>
      <Route path={`${path}/profile`}>
        <Profile />
      </Route>
      <Route path={`${path}/upgrade`}>
        <Upgrade />
      </Route>
    </div>
  );
};

export default Dashboard;

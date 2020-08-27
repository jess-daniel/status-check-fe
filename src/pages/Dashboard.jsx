import React, { useEffect } from "react";
import { Link, useRouteMatch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Profile from "../components/Profile";
import Upgrade from "../components/Upgrade";
import DashboardContent from "../components/DashboardContent";
import userAction from "../actions/userAction";
import { connect } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    backgroundColor: "#EFE2BA",
  },
  dashContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px black solid",
    width: "80%",
    margin: "0 auto",
    backgroundColor: "#BAC7EF",
  },
  navlink: {
    color: "black",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },
  capital: {
    textTransform: "capitalize",
  },
}));

// make a get request for the user's object
// nested routes for tabs

const Dashboard = ({ userAction, profile, userError }) => {
  useEffect(() => {
    userAction();
  }, []);

  const classes = useStyles();
  let { path, url } = useRouteMatch();

  if (userError) {
    window.location.reload();
  }

  return (
    <div className={classes.root}>
      <div className={classes.dashContainer}>
        <p className={classes.capital}>
          Welcome Back, {profile && profile.nickname}
        </p>
        <Link className={classes.navlink} to={`${url}`}>
          Dashboard
        </Link>
        <Link className={classes.navlink} to={`${url}/profile`}>
          Profile
        </Link>
        <Link className={classes.navlink} to={`${url}/upgrade`}>
          Upgrade
        </Link>
      </div>
      <Route exact path={`${path}`}>
        <DashboardContent />
      </Route>
      <Route exact path={`${path}/profile`}>
        <Profile />
      </Route>
      <Route exact path={`${path}/upgrade`}>
        <Upgrade />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.user.profile,
    userError: state.user.error,
  };
};

export default connect(mapStateToProps, { userAction })(Dashboard);

import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

const NavBar = () => {
  const { user } = useSelector((state) => state);
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  const login = () => {
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      <div>
        <h2>Status Check</h2>
      </div>
      <div>
        {user.isAuthenticated ? (
          <Button variant="contained" color="secondary" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button variant="contained" color="secondary" onClick={login}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default NavBar;

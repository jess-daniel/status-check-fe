import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  const login = () => {
    history.push('/login');
  };
  const token = localStorage.getItem('token');
  return (
    <div className={classes.root}>
      <div>
        <h2>Status Check</h2>
      </div>
      <div>
        {token ? (
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

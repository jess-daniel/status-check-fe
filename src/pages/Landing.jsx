import React from 'react';
import { makeStyles } from '@material-ui/core';
import AuthForm from '../components/AuthForm';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '90vh',
    backgroundColor: '#EFE2BA',
  },
  landingHero: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    lineHeight: '20px',
  },
  ul: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',

    '& li': {
      margin: '0 auto',
      width: '60%',
      textAlign: 'left',
      lineHeight: '25px',
    },
  },
  landingText: {
    fontWeight: '500',
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.landingHero}>
        <h1>Status Check</h1>
        <p className={classes.landingText}>
          Need to track whether an online service is up or down? Create an
          account and get status updates anytime your resource goes down!
        </p>
        <ul className={classes.ul}>
          <li>Track business critical API's</li>
          <li>Know if an online service goes down</li>
          <li>Monitor your own website for outages</li>
        </ul>
      </div>
      <div>
        <AuthForm login={false} />
      </div>
    </div>
  );
};

export default Landing;

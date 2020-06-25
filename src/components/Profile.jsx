import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emailVerify: {
    display: 'flex',
    justifyContent: 'center',
  },
  verifyLink: {
    color: 'blue',
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const Profile = () => {
  const classes = useStyles();
  const { user } = useSelector((state) => state);
  // need to make endpoint to verify email
  const verifyEmail = async () => {
    try {
      const user_id = user.profile.sub;
      const res = await axiosWithAuth().post('/api/users/verify-email', {
        user_id,
      });
      console.log('verify res', res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.root}>
      <h1>Profile</h1>
      <p>Edit your user profile and app settings</p>
      <p>More functionality coming soon!</p>
      <div>
        <p>Email: {user.profile.email}</p>
        <div className={classes.emailVerify}>
          <p>Verified:</p>
          {user.profile.email_verified ? (
            <p>Verified</p>
          ) : (
            <p className={classes.verifyLink} onClick={verifyEmail}>
              Verify Now!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

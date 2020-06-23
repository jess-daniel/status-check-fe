import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';

import loginAction from '../actions/loginAction';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  stateSwitch: {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
}));

const AuthForm = ({ login, loginAction }) => {
  const [loginState, setLoginState] = useState(login);
  const classes = useStyles();
  const history = useHistory();
  const { handleSubmit, control, register, errors } = useForm();

  const registrationSubmit = async (data) => {
    console.log('data', data);
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_HOST}/auth/register`,
      data
    );
    console.log('res', res);
    setTimeout(() => {
      history.push('/login');
    }, 1000);
  };

  const loginSubmit = (data) => {
    loginAction(data);
    history.push('/dashboard');
  };

  if (!loginState) {
    return (
      <div className={classes.root}>
        <h2>Create An Account</h2>
        <form
          className={classes.form}
          onSubmit={handleSubmit(registrationSubmit)}
          action={process.env.REACT_APP_SERVER_HOST}
          method="POST"
        >
          <Controller
            as={TextField}
            name="username"
            label="Username"
            required
            control={control}
            defaultValue=""
            inputRef={register}
            id="username"
            variant="filled"
          />
          {errors.name && <p>{errors.name.message}</p>}
          <Controller
            as={TextField}
            control={control}
            name="email"
            label="Email"
            required
            defaultValue=""
            type="email"
            inputRef={register}
            id="email"
            variant="filled"
          />
          <Controller
            as={TextField}
            control={control}
            name="password"
            label="Password"
            required
            defaultValue=""
            type="password"
            inputRef={register}
            id="password"
            variant="filled"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
        <p className={classes.stateSwitch} onClick={() => setLoginState(true)}>
          Already have an account? Login instead
        </p>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <h2>Login</h2>
        <form
          className={classes.form}
          onSubmit={handleSubmit(loginSubmit)}
          action={process.env.REACT_APP_SERVER_HOST}
          method="POST"
        >
          <Controller
            as={TextField}
            name="username"
            label="Username"
            required
            control={control}
            defaultValue=""
            inputRef={register}
            id="username"
            variant="filled"
          />
          {errors.name && <p>{errors.name.message}</p>}
          <Controller
            as={TextField}
            control={control}
            name="password"
            label="Password"
            required
            defaultValue=""
            type="password"
            inputRef={register}
            id="password"
            variant="filled"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
        <p className={classes.stateSwitch} onClick={() => setLoginState(false)}>
          Need to create an account? Register instead
        </p>
      </div>
    );
  }
};

export default connect(null, { loginAction })(AuthForm);

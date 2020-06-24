import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';

import { ADD_RESOURCE, ADD_SUCCESS, ADD_FAILURE } from '../actions/types';

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

const AddResource = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { handleSubmit, control, register, errors } = useForm();
  const user = useSelector((state) => state.user.user);

  console.log('user', user);
  const submitResource = async (data) => {
    try {
      console.log('user', user);
      dispatch({ type: ADD_RESOURCE });
      const res = await axiosWithAuth().post('/api/resources', {
        ...data,
        user_id: user.id,
      });
      dispatch({ type: ADD_SUCCESS, payload: res.data });
      setTimeout(() => {
        history.push('/dashboard');
      }, 1000);
    } catch (err) {
      dispatch({ type: ADD_FAILURE, payload: err });
    }
  };

  return (
    <div>
      <h2>Editing Resource</h2>
      <form
        className={classes.form}
        onSubmit={handleSubmit(submitResource)}
        action={process.env.REACT_APP_SERVER_HOST}
        method="POST"
      >
        <Controller
          as={TextField}
          name="name"
          label="Name"
          required
          control={control}
          defaultValue=""
          inputRef={register}
          id="name"
          variant="filled"
        />
        {errors.name && <p>{errors.name.message}</p>}
        <Controller
          as={TextField}
          control={control}
          name="link"
          label="url"
          required
          defaultValue=""
          type="url"
          inputRef={register}
          id="link"
          variant="filled"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddResource;

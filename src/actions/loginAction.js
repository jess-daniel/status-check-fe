import axios from 'axios';

import { START_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

const loginAction = (data) => async (dispatch) => {
  console.log('data', data);
  try {
    await dispatch({ type: START_LOGIN });
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_HOST}auth/login`,
      data
    );
    localStorage.setItem('token', `${res.data.userData.access_token}`);
    console.log('login res', res);
    await dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.userData,
    });
  } catch (error) {
    await dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export default loginAction;

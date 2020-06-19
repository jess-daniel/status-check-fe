import axios from 'axios';
import {
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../reducers/userReducer';

const loginAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: START_LOGIN });
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_HOST}/auth/login`,
      data
    );
    localStorage.setItem('access_token', res.data.userData.access_token);
    console.log('login res', res);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export default loginAction;

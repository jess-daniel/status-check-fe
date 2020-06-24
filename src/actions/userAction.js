import axiosWithAuth from '../utils/axiosWithAuth';

import { FETCH_USER, USER_SUCCESS, USER_FAILURE } from '../actions/types';

const accessToken = localStorage.getItem('token');

const userAction = () => async (dispatch) => {
  try {
    await dispatch({ type: FETCH_USER });
    const res = await axiosWithAuth().post('/api/users/auth-profile', {
      accessToken,
    });
    console.log('user profile', res);
    await dispatch({ type: USER_SUCCESS, payload: res.data });
  } catch (err) {
    console.error(err);
    await dispatch({ type: USER_FAILURE, payload: err });
  }
};

export default userAction;

import {
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_USER,
  USER_SUCCESS,
  USER_FAILURE,
} from '../actions/types';

const initialState = {
  loggingIn: false,
  isAuthenticated: false,
  isFetching: false,
  userData: {},
  user: {},
  error: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return {
        ...state,
        loggingIn: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isAuthenticated: true,
        userData: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case FETCH_USER:
      return {
        ...state,
        isFetching: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
      };
    case USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

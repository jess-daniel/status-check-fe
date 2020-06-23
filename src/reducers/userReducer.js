export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FETCH_USER = 'FETCH_USER';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

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

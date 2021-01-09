import { FETCH_LOGS, LOGS_SUCCESS, LOGS_FAILURE } from "../actions/types";

const initialState = {
  fetchingLogs: false,
  logs: [],
  error: "",
};

export const logsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGS:
      return {
        ...state,
        fetchingLogs: true,
      };
    case LOGS_SUCCESS:
      return {
        ...state,
        fetchingLogs: false,
        logs: action.payload,
        error: "",
      };
    case LOGS_FAILURE:
      return {
        ...state,
        fetchingLogs: false,
        logs: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

import {
  FETCH_RESOURCES,
  RESOURCE_SUCCESS,
  RESOURCE_FAILURE,
} from '../actions/types';

const initialState = {
  fetchingResources: false,
  resources: [],
  error: '',
};

export const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESOURCES:
      return {
        ...state,
        fetchingResources: true,
      };
    case RESOURCE_SUCCESS:
      return {
        ...state,
        fetchingResources: false,
        resources: action.payload,
        error: '',
      };
    case RESOURCE_FAILURE:
      return {
        ...state,
        fetchingResources: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

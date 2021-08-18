import { FETCH_ERROR, SET_LOADING, TOP_10 } from '../actions';

const INITIAL_USER_STATE = {
  tracks: {},
  loading: true,
  error: '',
};

const listReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case TOP_10:
      return {
        ...state,
        tracks: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default listReducer;
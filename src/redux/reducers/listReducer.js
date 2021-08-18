import { TOP_10 } from '../actions';

const INITIAL_USER_STATE = {
  tracks: {},
};

const listReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case TOP_10:
      return {
        ...state,
        tracks: action.payload
      }
  default:
    return state;
  }
};

export default listReducer;
import { combineReducers } from 'redux';
import listReducer from './listReducer';
import musicReducer from './musicReducer';

const rootReducer = combineReducers({
  listReducer,
  musicReducer,
});

export default rootReducer;

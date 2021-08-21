import { combineReducers } from 'redux';
import topChartReducer from './topChartReducer';
import musicReducer from './musicReducer';

const rootReducer = combineReducers({
  topChartReducer,
  musicReducer,
});

export default rootReducer;

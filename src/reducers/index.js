import { combineReducers } from 'redux';

import newsReducer from './reducer-news';
import authReducer from './reducer-auth';

const rootReducer = combineReducers({
  news: newsReducer,
  auth: authReducer
});

export default rootReducer;

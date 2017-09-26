import { combineReducers } from 'redux';

import newsReducer from './reducer-news';
import authReducer from './reducer-auth';
import sitesReducer from './reducer-sites';

const rootReducer = combineReducers({
  news: newsReducer,
  auth: authReducer,
  sites: sitesReducer
});

export default rootReducer;

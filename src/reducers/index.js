import { combineReducers } from 'redux';

import newsReducer from './reducer-news';
import selectedNewsReducer from './reducer-selected-news';

const rootReducer = combineReducers({
  news: newsReducer,
  selectedNews: selectedNewsReducer
});

export default rootReducer;

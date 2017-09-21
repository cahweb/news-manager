import { FETCH_NEWS, CLEAR_NEWS } from '../actions/types';

export default function (state = [], action) {
  let news = [];
  switch (action.type) {
    case FETCH_NEWS:
      for (const res of action.payload) {
        news = news.concat(res.data);
      }

      news.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

      return news;
    case CLEAR_NEWS:
      return [];
    default:
      return state;
  }
}

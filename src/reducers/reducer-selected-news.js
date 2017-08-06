import { FETCH_SELECTED_NEWS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_SELECTED_NEWS:
      return action.payload.data;
    default:
      return state;
  }
}

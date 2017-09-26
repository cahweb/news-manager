import { FETCH_SITES } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SITES:
      return action.payload.data;
    default:
      return state;
  }
}

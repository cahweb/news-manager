import { LOGIN_USER } from '../actions/types';

export default function (state = { loggedIn: false }, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        loggedIn: true,
        token: action.payload.token
      };
    default:
      return state;
  }
}

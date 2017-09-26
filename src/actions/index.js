import axios from 'axios';

import { FETCH_SITES, FETCH_NEWS, CLEAR_NEWS, LOGIN_USER } from './types';

//const URL_LIST = ['www.cah.ucf.edu', 'arts.cah.ucf.edu'];

export function loginUser(username, password) {
  return {
    type: LOGIN_USER,
    payload: {
      token: btoa(`${username}:${password}`)
    }
  };
}

export function fetchSites() {
  return {
    type: FETCH_SITES,
    payload: axios.get('http://cah.ucf.edu/wp-json/news/sites')
  };
}

export function fetchNews() {
  return (dispatch, getState) => {
    const URL_LIST = getState().sites;

    const requests = URL_LIST.map(url =>
      axios.get(`http://${url}/wp-json/wp/v2/news?per_page=100`)
    );

    return dispatch({
      type: FETCH_NEWS,
      payload: axios.all(requests)
    });
  };
}

export function clearNews() {
  return {
    type: CLEAR_NEWS,
    payload: []
  };
}

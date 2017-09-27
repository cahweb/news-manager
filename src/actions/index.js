import axios from 'axios';
import { toast } from 'react-toastify';

import { FETCH_SITES, FETCH_NEWS, CLEAR_NEWS, LOGIN_USER } from './types';

export function notify(notification) {
  return () => {
    if (notification.type === 'success') {
      toast(notification.text, {
        className: 'success-toast'
      });
    }

    if (notification.type === 'error') {
      toast(notification.text, {
        className: 'error-toast'
      });
    }
  };
}

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

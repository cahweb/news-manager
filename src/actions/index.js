import axios from 'axios';

import { FETCH_NEWS, CLEAR_NEWS } from './types';

const URL_LIST = ['www.cah.ucf.edu', 'arts.cah.ucf.edu'];

export function fetchNews() {
  const requests = URL_LIST.map(url => axios.get(`http://${url}/wp-json/wp/v2/news?per_page=100`));

  return {
    type: FETCH_NEWS,
    payload: axios.all(requests)
  };
}

export function clearNews() {
  return {
    type: CLEAR_NEWS,
    payload: []
  };
}

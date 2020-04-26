import fetchIntercept from 'fetch-intercept';
import localStorageService from './localstorage';
import { API_URL } from './apiUrls';

const urlBase = API_URL.BASE_URL;

const readUrl = (url = '') => (url.startsWith('http://') || url.startsWith('https://') ? url : `${urlBase}/${url}`);

const get = (url = '', headers = {}) => fetch(readUrl(url), {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
}).then((response) => response.json());

const post = (url = '', body = {}, headers = {}) => fetch(readUrl(url), {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
}).then((response) => response.json());

const put = (url = '', body = {}, headers = {}) => fetch(readUrl(url), {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
}).then((response) => response.json());

const del = (url = '', headers = {}) => fetch(readUrl(url), {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
}).then((response) => response.json());

fetchIntercept.register({
  request(url, config) {
    const token = localStorageService.getItem(API_URL.TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return [url, config];
  },

  response(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;

    // eslint-disable-next-line no-unreachable
    return response;
  },
});

export default {
  get,
  post,
  put,
  delete: del,
};

import axios from 'axios';
import localStorageService from './localstorage';
import api from './api';

const urlBase = 'http://baugitapi.herokuapp.com/api/v1';

const readUrl = (url = '') => (url.startsWith('http://') || url.startsWith('https://') ? url : `${urlBase}/${url}`);

const get = (url = '', headers = {}) => axios.get(readUrl(url), {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
});

const post = (url = '', body = {}, headers = {}) => axios.post(readUrl(url), body, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
});

const put = (url = '', body = {}, headers = {}) => axios.put(readUrl(url), body, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
});

const del = (url = '', headers = {}) => axios.delete(readUrl(url), {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  },
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorageService.getItem(api.TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
export default {
  get,
  post,
  put,
  delete: del,
};

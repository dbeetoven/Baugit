import { API_URL } from './apiUrls';
import httpService from './fetch-client';

const login = ({ email, password }) => httpService.post(API_URL.LOGIN, { email, password });

const logout = () => httpService.post(API_URL.LOGOUT, {});

const me = () => httpService.get(API_URL.ME);
const logoutAll = () => httpService.post(API_URL.LOGOUT_ALL, {});

function register({ email, password, username }) {
  return httpService.post(API_URL.SIGNUP, { username, email, password });
}

export {
  login, me, register, logout, logoutAll
};

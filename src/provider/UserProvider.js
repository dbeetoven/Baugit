/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { API_URL } from 'services/apiUrls';
import { login, logout, register } from 'services/authService';
import { useLocalStorage } from './useLocalStorage';

const UserContext = React.createContext();
const { Provider, Consumer } = UserContext;

function UserProvider({ children }) {
  const [user, setUser] = useLocalStorage(API_URL.USER, null);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useLocalStorage(API_URL.TOKEN_KEY, null);

  function handleLogin(email, password) {
    return login(email, password)
      .then((res) => {
        const [user, token] = res;
        setUser(user);
        setToken(token);
      })
      .catch((err) => console.error(err));
  }

  function handleLogout() {
    logout()
      .then(() => {
        setToken(null);
        setUser({});
      })
      .catch((err) => console.error(err));
  }

  function handleRegister(email, password, username) {
    register(email, password, username)
      .then((res) => {
        const [user, token] = res;
        setUser(user);
        setToken(token);
      })
      .catch((err) => console.error(err));
  }
  return (
    <Provider
      value={{
        user,
        handleLogin,
        handleRegister,
        handleLogout,
      }}
    >
      {children}
    </Provider>
  );
}

export { UserContext, UserProvider, Consumer as UserConsumer };

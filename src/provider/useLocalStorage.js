import { useState } from 'react';

export function useLocalStorage(key, value) {
  const [store, setStore] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch (error) {
      return value;
    }
  });

  const setValue = (value) => {
    try {
      setStore(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return [store, setValue];
}

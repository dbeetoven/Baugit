const setItem = (key, item) => window.localStorage.setItem(key, JSON.stringify(item));
const getItem = (key) => JSON.parse(window.localStorage.getItem(key));
const removeItem = (key) => window.localStorage.removeItem(key);
const clear = () => window.localStorage.clear();

export default {
  setItem, getItem, removeItem, clear
};

import config from './../config/config.json';

const scrollKey = config.gallery.state.scroll;

const getScrollTop = () => {
  const windowScrolTopIsNotDefined =
    typeof window.pageYOffset !== 'undefined';
  const documentScrollTopIsNotDefined =
    typeof document.documentElement.scrollTop !== 'undefined';
  if (windowScrolTopIsNotDefined) {
    return window.pageYOffset;
  }
  if (documentScrollTopIsNotDefined) {
    return document.documentElement.scrollTop;
  }
  return document.body.scrollTop || 0;
};

const removeFromLocalStorage = (key) => {
  if (!key) {
    return;
  }
  window.localStorage.removeItem(key);
};

const saveScrollInLocalStorage = (args) => {
  if (!args) {
    return;
  }
  removeFromLocalStorage();
  window.localStorage.setItem(scrollKey, args);
};

const saveScrollPossition = () => {
  const scrollTop = getScrollTop() || 0;
  saveScrollInLocalStorage(scrollTop);
};

const getFromLocalStorage = (key) => {
  if (!key) {
    return undefined;
  }
  return window.localStorage.getItem(key);
};

const getScrollFromLocalStorage = () => getFromLocalStorage(scrollKey);

export { saveScrollPossition, getScrollFromLocalStorage };

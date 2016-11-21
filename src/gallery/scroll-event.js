const eventName = 'scroll';

const create = (callback) => {
  if (window.addEventListener) {
    window.addEventListener(eventName, callback, false);
  }
};

const remove = (callback) => {
  if (window.addEventListener) {
    window.removeEventListener(eventName, callback);
  }
};

const setScrollPossition = (pos) => {
  window.scrollTo(0, pos);
};

export { create as createScrollEvent, remove as removeScrollEvent, setScrollPossition };

const getRangeInputById = id => document.getElementById(id);

const eventName = 'change';

const attachEvent = (id, callback) => {
  const domElement = getRangeInputById(id);
  if (domElement && window.addEventListener) {
    domElement.addEventListener(eventName, callback, false);
  }
};

export default attachEvent;

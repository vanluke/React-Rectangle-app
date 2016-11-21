const appendPixels = (prop) => {
  if (!prop) {
    return '';
  }
  const input = parseInt(prop, 10);
  return Number.isNaN(input) ? '' : `${input}${prop.match(/px/) || 'px'}`;
};

const appendHex = (prop) => {
  if (!prop) {
    return '';
  }
  return prop.indexOf('#') >= 0 ? prop : `#${prop}`;
};

const createStyles = (rect, org = {}) => ({
  background: rect.background ? appendHex(rect.background) : appendHex(org.background),
  width: appendPixels(rect.width),
  height: appendPixels(rect.height),
  borderRadius: appendPixels(rect.borderRadius),
});

export default (props = {}) => {
  const rectangle = {
    ...props,
    styles: createStyles(props),
  };
  return rectangle;
};

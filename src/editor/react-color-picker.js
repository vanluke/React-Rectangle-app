import React, { PropTypes } from 'react';
import ColorPicker from 'react-color';

const changeProxy = handleChangeComplete => color =>
  handleChangeComplete(color.hex);

const ReactColorPicker = (props) => {
  const { handleChangeComplete, color } = props;
  return (<ColorPicker
    color={color}
    onChangeComplete={changeProxy(handleChangeComplete)}
    type="compact"
  />);
};

ReactColorPicker.propTypes = {
  handleChangeComplete: PropTypes.func,
  color: PropTypes.string,
};

export default ReactColorPicker;

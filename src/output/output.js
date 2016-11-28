import React, { PropTypes } from 'react';
import 'output/_rectangle.scss';

const Output = ({ styles, onClick, title }) =>
  (<div className="c-rectangle" style={styles} onClick={onClick} title={title} />);

Output.propTypes = {
  styles: PropTypes.shape({
    background: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    borderRadius: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default Output;

import React, { PropTypes } from 'react';

const Square = ({ className }) => <div className={className} />;

Square.propTypes = {
  className: PropTypes.string,
};

export default Square;

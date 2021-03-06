import React, { PropTypes } from 'react';
import SpinnerContainer from 'spinner/container';
import SpinnerSquare from 'spinner/square';

export const AppSpinner = ({ isVisible }) =>
  (<SpinnerContainer isVisible={isVisible}>
    <SpinnerSquare
      className="c-spinner__square c-spinner__square--top-left"
    />
    <SpinnerSquare
      className="c-spinner__square c-spinner__square--top-right"
    />
    <SpinnerSquare
      className="c-spinner__square c-spinner__square--bottom-right"
    />
  </SpinnerContainer>);

AppSpinner.propTypes = {
  isVisible: PropTypes.bool,
};

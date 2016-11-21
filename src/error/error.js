import React, { PropTypes } from 'react';
import './_error.scss';

const Error = ({ error, isVisible }) =>
(<div className={!isVisible ? 'c-error c-error--hide' : 'c-error'}>
  <p className="c-error__header">Error</p>
  <p className="c-error__message">
    We are sorry an error occured!
    Please refresh browser in a few seconds.
  </p>&nbsp;
  <p className="c-error__message c-error__message--details">
    {error && error.message ? error.message : ''}
  </p>
</div>);

Error.propTypes = {
  error: PropTypes.shape({
    crossDomain: PropTypes.bool,
    message: PropTypes.string,
    method: PropTypes.string,
    stack: PropTypes.string,
    status: PropTypes.string,
    url: PropTypes.string,
  }),
  isVisible: PropTypes.bool,
};

export default Error;

import React, { PropTypes } from 'react';
import './_keyframes.scss';
import './_overlay.scss';
import './_spinner.scss';

const SpinnerContainer = ({ children, isVisible }) =>
  (<aside className={isVisible ? 'overlay' : 'c-spinner--hidden'}>
    <div
      className="c-spinner"
    >{children}
    </div>
  </aside>);

SpinnerContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  isVisible: PropTypes.bool,
};

export default SpinnerContainer;

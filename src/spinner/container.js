import React, { PropTypes } from 'react';
import 'spinner/_keyframes.scss';
import 'spinner/_overlay.scss';
import 'spinner/_spinner.scss';

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

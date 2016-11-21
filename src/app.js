import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import Spinner from './spinner';
import Error from './error';

export class App extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    isSpinnerVisible: PropTypes.bool,
    isErrorVisible: PropTypes.bool,
    error: PropTypes.shape({
      crossDomain: PropTypes.bool,
      message: PropTypes.string,
      method: PropTypes.string,
      stack: PropTypes.string,
      status: PropTypes.string,
      url: PropTypes.string,
    }),
  };

  constructor(props) {
    super(...props);
  }

  render() {
    const { children, isSpinnerVisible, isErrorVisible, error } = this.props;
    return (<div>
      <header className="c-app__header">
        <h1 className="c-app__header--main">
          Pimp my rect
        </h1>
        <aside className="c-app__header--subheader">
          Click on rectagle to turn on edit mode
        </aside>
      </header>
      <Error isVisible={isErrorVisible} error={error} />
      <Spinner isVisible={isSpinnerVisible} />
      {children}
    </div>);
  }
}

function mapStateToProps(state) {
  const { spinnerReducer, errorReducer } = state;
  return {
    isSpinnerVisible: spinnerReducer.isVisible,
    isErrorVisible: errorReducer.isVisible,
    error: errorReducer.error,
  };
}

export default connect(mapStateToProps)(App);

import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import { toggleSpinner } from 'spinner/actions';
import { AppSpinner } from 'spinner/app-spinner';


export class SpinnerProvider extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    isVisible: PropTypes.bool,
  };

  constructor(props) {
    super(...props);
  }
  componentDidMount() {
    const { dispatch, isVisible } = this.props;
    dispatch(toggleSpinner(isVisible));
  }

  render() {
    const { isVisible } = this.props;
    return <AppSpinner isVisible={isVisible} />;
  }
}

function mapStateToProps(state) {
  const { spinnerReducer } = state;
  return {
    isVisible: spinnerReducer.isVisible,
  };
}

export default connect(mapStateToProps)(SpinnerProvider);

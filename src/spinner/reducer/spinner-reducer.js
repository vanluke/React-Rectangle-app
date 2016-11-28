import { TOGGLE_SPINNER } from 'spinner/actions';

const initialState = {
  isVisible: false,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_SPINNER:
      return {
        isVisible: action.isVisible,
      };
    default: {
      return state;
    }
  }
}

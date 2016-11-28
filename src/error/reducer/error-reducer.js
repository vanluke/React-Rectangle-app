import { HANDLE_ERROR } from 'error/actions';

const initialState = {
  error: undefined,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case HANDLE_ERROR: {
      return {
        ...state,
        error: action.error,
        isVisible: !!action.error,
      };
    }
    default:
      return state;
  }
}

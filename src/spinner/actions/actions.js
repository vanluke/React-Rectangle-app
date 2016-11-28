import { TOGGLE_SPINNER } from 'spinner/actions/consts';

export const toggleSpinner = isVisible => ({
  type: TOGGLE_SPINNER,
  isVisible,
});

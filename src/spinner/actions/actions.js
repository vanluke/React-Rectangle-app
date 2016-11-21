import { TOGGLE_SPINNER } from './consts';

export const toggleSpinner = isVisible => ({
  type: TOGGLE_SPINNER,
  isVisible,
});

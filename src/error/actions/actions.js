import { HANDLE_ERROR } from 'error/actions/consts';

export const showErrorMessage = error => ({
  type: HANDLE_ERROR,
  error,
});

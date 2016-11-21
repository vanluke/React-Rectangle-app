import { HANDLE_ERROR } from './consts';

export const showErrorMessage = error => ({
  type: HANDLE_ERROR,
  error,
});

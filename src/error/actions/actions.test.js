import { expect } from 'chai';
import { HANDLE_ERROR } from 'error/actions/consts';
import { showErrorMessage } from 'error/actions/actions';

describe('Error', () => {
  describe('actions', () => {
    it('should return HANDLE_ERROR', () => {
      const result = showErrorMessage({ message: 'some message' });
      // eslint-disable-next-line no-unused-expressions
      expect(result).to.be.ok;
      expect(result.type).to.be.equal(HANDLE_ERROR);
    });
  });
});

import { expect } from 'chai';
import reducer from './error-reducer';
import { HANDLE_ERROR } from '../actions';

describe('Error', () => {
  describe('reducer', () => {
    const initialState = {
      error: undefined,
    };
    it('should return initial state', () => {
      const reduced = reducer();

      // eslint-disable-next-line no-unused-expressions
      expect(reduced).to.be.ok;
      // eslint-disable-next-line no-unused-expressions
      expect(reduced.error).to.be.undefined;
    });

    it('reduces HANDLE_ERROR', () => {
      const action = {
        type: HANDLE_ERROR,
        error: { message: 'msg' },
      };
      const reduced = reducer(initialState, action);

      // eslint-disable-next-line no-unused-expressions
      expect(reduced).to.be.ok;
      // eslint-disable-next-line no-unused-expressions
      expect(reduced.error).to.not.be.undefined;
    });
  });
});

import { expect } from 'chai';
import { TOGGLE_SPINNER } from '../actions/consts';
import reducer from './spinner-reducer';

describe('Spinner reducer', () => {
  it('reduces spinner', () => {
    const action = {
      type: TOGGLE_SPINNER,
      isVisible: true,
    };
    const state = {
      isVisible: false,
    };

    const reduced = reducer(state, action);
    expect(reduced.isVisible).to.be.equal(true);
  });
});

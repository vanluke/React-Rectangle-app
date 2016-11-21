import { expect } from 'chai';
import { TOGGLE_SPINNER } from './consts';
import { toggleSpinner } from './actions';

describe('Spinner actions', () => {
  it('toggle spinner', () => {
    const expected = {
      type: TOGGLE_SPINNER,
      isVisible: true,
    };
    const result = toggleSpinner(true);
    expect(result.isVisible).to.be.equal(expected.isVisible);
  });
});

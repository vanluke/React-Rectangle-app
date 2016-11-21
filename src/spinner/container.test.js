import { expect } from 'chai';
import wrap from 'react-mocha-stateless-test-helper';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
} from 'react-addons-test-utils';
import SpinnerContainer from './container';


describe('Spinner', () => {
  describe('components', () => {
    it('SpinnerContainer should render', () => {
      const props = {
        isVisible: true,
        children: [],
      };
      const component = renderIntoDocument(wrap(SpinnerContainer, props));
      const output = scryRenderedDOMComponentsWithClass(component, 'overlay');

      // eslint-disable-next-line no-unused-expressions
      expect(output).to.be.ok;
    });
  });
});

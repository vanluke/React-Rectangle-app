import { expect } from 'chai';
import wrap from 'react-mocha-stateless-test-helper';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
} from 'react-addons-test-utils';
import { AppSpinner } from './app-spinner';


describe('Spinner', () => {
  describe('components', () => {
    it('AppSpinner should render', () => {
      const props = {
        isVisible: true,
      };
      const component = renderIntoDocument(wrap(AppSpinner, props));
      const output = scryRenderedDOMComponentsWithClass(component, 'c-spinner__square');

      // eslint-disable-next-line no-unused-expressions
      expect(output).to.be.ok;
    });
  });
});

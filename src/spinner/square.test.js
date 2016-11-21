import { expect } from 'chai';
import wrap from 'react-mocha-stateless-test-helper';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
} from 'react-addons-test-utils';
import Square from './square';


describe('Spinner', () => {
  describe('components', () => {
    it('Square should render', () => {
      const props = {
        className: 'cls',
      };
      const component = renderIntoDocument(wrap(Square, props));
      const output = scryRenderedDOMComponentsWithClass(component, 'cls');

      // eslint-disable-next-line no-unused-expressions
      expect(output).to.be.ok;
    });
  });
});

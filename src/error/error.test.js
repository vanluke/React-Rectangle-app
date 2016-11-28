import { expect } from 'chai';
import wrap from 'react-mocha-stateless-test-helper';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
} from 'react-addons-test-utils';
import Error from 'error/error';

describe('Error', () => {
  describe('components', () => {
    const props = {
      error: { message: 'msg' },
      isViible: true,
    };
    it('error renders', () => {
      const component = renderIntoDocument(wrap(Error, props));
      const error = scryRenderedDOMComponentsWithTag(component, 'div');

      // eslint-disable-next-line no-unused-expressions
      expect(error).to.be.ok;
    });
    it('should have text message', () => {
      const component = renderIntoDocument(wrap(Error, props));
      const error = scryRenderedDOMComponentsWithTag(component, 'div');
      expect(error[0].textContent)
      .to
      .contain('We are sorry an error occured!');
    });
  });
});

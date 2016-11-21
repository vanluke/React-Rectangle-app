import { expect } from 'chai';
import wrap from 'react-mocha-stateless-test-helper';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  findRenderedDOMComponentWithClass,
} from 'react-addons-test-utils';
import FormRangeItem from './form-range';

describe('Editor', () => {
  describe('FormRangeItem', () => {
    const props = {
      label: 'label',
      onChange: () => {},
      value: '321',
      setRefs: () => {},
      refName: 'ref',
      min: '1',
      max: '3',
      step: '1',
    };
    it('renders', () => {
      const component = renderIntoDocument(wrap(FormRangeItem, props));
      const item =
        scryRenderedDOMComponentsWithClass(component,
          'c-editor__form__item');

      // eslint-disable-next-line no-unused-expressions
      expect(item).to.be.ok;
    });

    it('should have input type range', () => {
      const component = renderIntoDocument(wrap(FormRangeItem, props));
      const item =
        findRenderedDOMComponentWithClass(component,
          'c-editor__range');

      expect(item.type).to.be.equal('range');
    });

    it('should render label', () => {
      const component = renderIntoDocument(wrap(FormRangeItem, props));
      const item =
        findRenderedDOMComponentWithClass(component,
          'c-editor__label');

      expect(item.textContent).to.be.equal('label');
    });
  });
});

import { expect } from 'chai';
import wrap from 'react-mocha-stateless-test-helper';
import {
  renderIntoDocument,
} from 'react-addons-test-utils';
import ReactColorPicker from './react-color-picker';

describe('Editor', () => {
  describe('ReactColorPicker', () => {
    const props = {
      color: '#fff',
      handleChangeComplete: () => {},
    };
    it('renders', () => {
      const component = renderIntoDocument(wrap(ReactColorPicker, props));

      // eslint-disable-next-line no-unused-expressions
      expect(component).to.be.ok;
    });
  });
});

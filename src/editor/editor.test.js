import { expect } from 'chai';
import wrap from 'react-mocha-stateless-test-helper';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
} from 'react-addons-test-utils';
import Editor from 'editor/editor';

describe('Editor', () => {
  describe('Editor Component', () => {
    const props = {
      submit: () => {},
      handleFormChange: () => {},
      styles: {},
      setRefs: () => {},
      discard: () => {},
      rectangle: {},
    };
    it('renders', () => {
      const component = renderIntoDocument(wrap(Editor, props));
      const editor = findRenderedDOMComponentWithClass(component, 'c-editor');

      // eslint-disable-next-line no-unused-expressions
      expect(editor).to.be.ok;
    });
  });
});

import { expect } from 'chai';
import wrap from 'react-mocha-stateless-test-helper';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
} from 'react-addons-test-utils';
import Gallery from './gallery';

describe('Gallery', () => {
  describe('components', () => {
    const props = {
      rectangles: [],
      editorModeIsActive: false,
      selectedRectangle: {},
      handleAddNewRectangle: () => {},
      openEditor: () => {},
      handleRemoveClick: () => {},
      discardRectangleChanges: () => {},
      saveRectangle: () => {},
      editRectangle: () => {},
    };
    it('gallery renders', () => {
      const component = renderIntoDocument(wrap(Gallery, props));
      const output = scryRenderedDOMComponentsWithTag(component, 'div');

      // eslint-disable-next-line no-unused-expressions
      expect(output).to.be.ok;
    });
  });
});

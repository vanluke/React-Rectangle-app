import { expect } from 'chai';
import {
  RECTANGLES_EDIT_MODE,
  RECTANGLES_SELECT,
  RECTANGLES_SELECT_ORIGINAL,
  RECTANGLES_DISCARD,
 } from './consts';
import {
  editorMode,
  selectRectagle,
  selectOriginalRectagle,
  restoreRectangle,
 } from './actions';

describe('Gallery', () => {
  describe('Action creators', () => {
    it('handle editorMode', () => {
      const toggledMode = editorMode(true);

      // eslint-disable-next-line no-unused-expressions
      expect(toggledMode).to.be.ok;
      expect(toggledMode.type).to.be.equal(RECTANGLES_EDIT_MODE);
      // eslint-disable-next-line no-unused-expressions
      expect(toggledMode.editorModeIsActive).to.be.true;
    });

    it('handle selectRectagle', () => {
      const rectangle = { _id: 1, width: '123' };
      const action = selectRectagle(rectangle);

      // eslint-disable-next-line no-unused-expressions
      expect(action).to.be.ok;
      expect(action.type).to.be.equal(RECTANGLES_SELECT);
      expect(action.selectedRectangle)
        .to
        .be
        .contain({ _id: 1, width: '123' });
    });

    it('handle selectOriginalRectagle', () => {
      const rectangle = { _id: 1, width: '123' };
      const action = selectOriginalRectagle(rectangle);

      // eslint-disable-next-line no-unused-expressions
      expect(action).to.be.ok;
      expect(action.type).to.be.equal(RECTANGLES_SELECT_ORIGINAL);
      expect(action.originalRectangle)
        .to
        .be
        .contain({ _id: 1, width: '123' });
    });

    it('handle restoreRectangle', () => {
      const rectangle = { _id: 1, width: '123' };
      const action = restoreRectangle(rectangle);

      // eslint-disable-next-line no-unused-expressions
      expect(action).to.be.ok;
      expect(action.type).to.be.equal(RECTANGLES_DISCARD);
    });
  });
});

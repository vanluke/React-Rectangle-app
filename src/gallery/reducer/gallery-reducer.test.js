import { expect } from 'chai';
import {
  RECTANGLES_FETCHED,
  RECTANGLES_REMOVED,
  RECTANGLES_CREATED,
  RECTANGLES_EDIT_MODE,
  RECTANGLES_SELECT,
  RECTANGLES_SELECT_ORIGINAL,
  RECTANGLES_UPDATED,
  RECTANGLES_DISCARD,
} from 'gallery/actions';
import reducer from 'gallery/reducer/gallery-reducer';

describe('Gallery', () => {
  describe('reducer', () => {
    const initState = {
      rectangles: [],
      editorModeIsActive: false,
      selectedRectangle: {},
      originalRectangle: undefined,
    };

    it('handle RECTANGLES_FETCHED', () => {
      const action = {
        type: RECTANGLES_FETCHED,
        rectangles: [],
      };
      const reduced = reducer(initState, action);

      // eslint-disable-next-line no-unused-expressions
      expect(reduced.rectangles).to.be.ok;
    });

    it('handle RECTANGLES_REMOVED', () => {
      const removeState = {
        ...initState,
        rectangles: [{ _id: 1 }, { _id: 2 }],
      };
      const action = {
        type: RECTANGLES_REMOVED,
        selectedRectangle: { _id: 2 },
      };
      const reduced = reducer(removeState, action);

      // eslint-disable-next-line no-unused-expressions
      expect(reduced.rectangles).to.be.ok;
      expect(reduced.rectangles.length).to.be.equal(1);
      expect(reduced.rectangles).to.deep.include({ _id: 1 });
    });

    it('handle RECTANGLES_CREATED', () => {
      const action = {
        type: RECTANGLES_CREATED,
        rectangle: { _id: 2 },
      };
      const reduced = reducer(initState, action);

      // eslint-disable-next-line no-unused-expressions
      expect(reduced.rectangles).to.be.ok;
      expect(reduced.rectangles).to.deep.include({ _id: 2 });
    });

    it('handle RECTANGLES_EDIT_MODE', () => {
      const action = {
        type: RECTANGLES_EDIT_MODE,
        editorModeIsActive: true,
      };
      const reduced = reducer(initState, action);

      // eslint-disable-next-line no-unused-expressions
      expect(reduced).to.be.ok;
      // eslint-disable-next-line no-unused-expressions
      expect(reduced.editorModeIsActive).to.be.true;
    });

    it('handle RECTANGLES_SELECT', () => {
      const action = {
        type: RECTANGLES_SELECT,
        selectedRectangle: { _id: 2 },
      };
      const reduced = reducer(initState, action);

      // eslint-disable-next-line no-unused-expressions
      expect(reduced).to.be.ok;
      // eslint-disable-next-line no-unused-expressions
      expect(reduced.selectedRectangle._id).to.be.equal(2);
    });

    it('handle RECTANGLES_SELECT_ORIGINAL', () => {
      const action = {
        type: RECTANGLES_SELECT_ORIGINAL,
        originalRectangle: { _id: 2 },
      };
      const reduced = reducer(initState, action);

      // eslint-disable-next-line no-unused-expressions
      expect(reduced).to.be.ok;
      // eslint-disable-next-line no-unused-expressions
      expect(reduced.originalRectangle._id).to.be.equal(2);
    });

    it('handle RECTANGLES_UPDATED', () => {
      const action = {
        type: RECTANGLES_UPDATED,
        rectangle: { _id: 2, background: 'abc' },
      };
      const updateState = {
        ...initState,
        rectangles: [{ _id: 1 }, { _id: 2, background: 'def' }],
      };
      const reduced = reducer(updateState, action);

      // eslint-disable-next-line no-unused-expressions
      expect(reduced).to.be.ok;
      // eslint-disable-next-line no-unused-expressions
      expect(reduced.rectangles).to.have.length.above(0);
      expect(reduced.rectangles)
        .to
        .have
        .deep
        .property('[1].background', 'abc');
    });

    it('handle RECTANGLES_DISCARD', () => {
      const action = {
        type: RECTANGLES_DISCARD,
        originalRectangle: { _id: 2 },
      };
      const reduced = reducer(initState, action);

      // eslint-disable-next-line no-unused-expressions
      expect(reduced).to.be.ok;
      // eslint-disable-next-line no-unused-expressions
      expect(reduced.rectangles).to.be.instanceof(Array);
    });

    it('should return the initial state', () => {
      const reduced = reducer();

      // eslint-disable-next-line no-unused-expressions
      expect(reduced.editorModeIsActive).to.be.false;
      // eslint-disable-next-line no-unused-expressions
      expect(reduced.editorModeIsActive).to.be.false;
      // eslint-disable-next-line no-unused-expressions
      expect(reduced.selectedRectangle).to.be.ok;
      // eslint-disable-next-line no-unused-expressions
      expect(reduced.originalRectangle).to.be.undefined;
    });
  });
});

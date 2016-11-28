import {
  RECTANGLES_FETCHED,
  RECTANGLES_REMOVED,
  RECTANGLES_CREATED,
  RECTANGLES_EDIT_MODE,
  RECTANGLES_SELECT,
  RECTANGLES_SELECT_ORIGINAL,
  RECTANGLES_UPDATED,
  RECTANGLES_DISCARD,
} from 'gallery/actions/consts';
import {
  postRectangle,
  getRectangles,
  deleteRectangle,
  putRectangles,
} from 'gallery/services';
import { saveScrollPossition } from 'gallery/gallery-state-middleware';
import {
    createScrollEvent,
    removeScrollEvent,
    setScrollPossition } from 'gallery/scroll-event';
import { toggleSpinner } from 'spinner/actions';
import { showErrorMessage } from 'error/actions';

export const removeScrollEventListener = () => {
  removeScrollEvent(e => saveScrollPossition(e));
};

export const rectanglesFetched = rectangles => ({
  type: RECTANGLES_FETCHED,
  rectangles,
});

export const rectanglesRemoved = selectedRectangle => ({
  type: RECTANGLES_REMOVED,
  selectedRectangle,
});

export const rectanglesCreated = rectangle => ({
  type: RECTANGLES_CREATED,
  rectangle,
});

export const editorMode = editorModeIsActive => ({
  type: RECTANGLES_EDIT_MODE,
  editorModeIsActive,
});

export const selectRectagle = selectedRectangle => ({
  type: RECTANGLES_SELECT,
  selectedRectangle,
});

export const selectOriginalRectagle = originalRectangle => ({
  type: RECTANGLES_SELECT_ORIGINAL,
  originalRectangle,
});

const rectangleUpdate = rectangle => ({
  type: RECTANGLES_UPDATED,
  rectangle,
});

export const restoreRectangle = () => ({
  type: RECTANGLES_DISCARD,
});

export const remoteRectanglesUpdate = rectangle => (async (dispatch) => {
  dispatch(toggleSpinner(true));
  try {
    await putRectangles(rectangle._id, rectangle);
    dispatch(rectangleUpdate(rectangle));
  } catch (e) {
    dispatch(showErrorMessage(e));
  }
  dispatch(toggleSpinner(false));
});

export const remoteRectanglesFetch = position => (async (dispatch) => {
  createScrollEvent(e => saveScrollPossition(e));
  dispatch(toggleSpinner(true));
  try {
    dispatch(rectanglesFetched(await getRectangles()));
  } catch (e) {
    dispatch(showErrorMessage(e));
  }
  dispatch(toggleSpinner(false));
  setScrollPossition(position);
});

export const remoteRectanglesRemove = rectangle => (async (dispatch) => {
  dispatch(toggleSpinner(true));
  try {
    await deleteRectangle(rectangle._id);
    dispatch(rectanglesRemoved(rectangle));
  } catch (e) {
    dispatch(showErrorMessage(e));
  }

  dispatch(toggleSpinner(false));
});


export const remoteRectanglesCreate = () => (async (dispatch) => {
  dispatch(toggleSpinner(true));
  try {
    dispatch(rectanglesCreated(await postRectangle()));
  } catch (e) {
    dispatch(showErrorMessage(e));
  }
  dispatch(toggleSpinner(false));
});

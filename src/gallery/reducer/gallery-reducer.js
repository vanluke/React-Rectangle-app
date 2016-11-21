import {
  RECTANGLES_FETCHED,
  RECTANGLES_REMOVED,
  RECTANGLES_CREATED,
  RECTANGLES_EDIT_MODE,
  RECTANGLES_SELECT,
  RECTANGLES_SELECT_ORIGINAL,
  RECTANGLES_UPDATED,
  RECTANGLES_DISCARD,
} from '../actions';
import Rectangle from '../../output/model';

const initState = {
  rectangles: [],
  editorModeIsActive: false,
  selectedRectangle: {},
  originalRectangle: undefined,
};

export default function (state = initState, action = {}) {
  switch (action.type) {
    case RECTANGLES_FETCHED: {
      return {
        ...state,
        rectangles: [...action.rectangles],
      };
    }
    case RECTANGLES_CREATED: {
      return {
        ...state,
        rectangles: [...state.rectangles, action.rectangle],
      };
    }
    case RECTANGLES_UPDATED: {
      return {
        ...state,
        rectangles: state.rectangles.map((r) => {
          if (r._id === action.rectangle._id) {
            return Rectangle(Object.assign({}, action.rectangle));
          }
          return Rectangle(r);
        }),
      };
    }
    case RECTANGLES_REMOVED: {
      return {
        ...state,
        rectangles: state
          .rectangles
          .filter(rect => rect._id !== action.selectedRectangle._id),
      };
    }
    case RECTANGLES_DISCARD: {
      return {
        ...state,
        rectangles: state.rectangles.map((rect) => {
          if (rect._id === state.originalRectangle._id) {
            return Rectangle(Object.assign({}, state.originalRectangle));
          }
          return Rectangle(rect);
        }),
      };
    }
    case RECTANGLES_SELECT:
      return {
        ...state,
        selectedRectangle: { ...action.selectedRectangle },
      };
    case RECTANGLES_SELECT_ORIGINAL:
      return {
        ...state,
        originalRectangle: { ...action.originalRectangle },
      };
    case RECTANGLES_EDIT_MODE: {
      return {
        ...state,
        editorModeIsActive: action.editorModeIsActive,
      };
    }
    default:
      return state;
  }
}

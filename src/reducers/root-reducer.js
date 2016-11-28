import { combineReducers } from 'redux';
import { spinnerReducer } from 'spinner/reducer';
import { galleryReducer } from 'gallery/reducer';
import { errorReducer } from 'error/reducer';

export default combineReducers({
  spinnerReducer,
  galleryReducer,
  errorReducer,
});

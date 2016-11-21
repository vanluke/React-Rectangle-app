import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  remoteRectanglesFetch,
  remoteRectanglesRemove,
  remoteRectanglesCreate,
  editorMode,
  selectRectagle,
  selectOriginalRectagle,
  remoteRectanglesUpdate,
  removeScrollEventListener,
  restoreRectangle,
} from './actions';
import GalleryComponent from './gallery';
import Rectangle from './../output/model';
import { getScrollFromLocalStorage } from './gallery-state-middleware';

export class GalleryContainer extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    rectangles: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string,
      background: PropTypes.string,
      styles: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        borderRadius: PropTypes.string,
        background: PropTypes.string,
      }),
    })),
    editorModeIsActive: PropTypes.bool,
    selectedRectangle: PropTypes.shape({
      _id: PropTypes.string,
      background: PropTypes.string,
      styles: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        borderRadius: PropTypes.string,
        background: PropTypes.string,
      }),
    }),
    originalRectangle: PropTypes.shape({
      _id: PropTypes.string,
      background: PropTypes.string,
      styles: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        borderRadius: PropTypes.string,
        background: PropTypes.string,
      }),
    }),
  };

  constructor(props) {
    super(...props);
    this.handleAddNewRectangle = this.handleAddNewRectangle.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.openEditor = this.openEditor.bind(this);
    this.discardRectangleChanges = this.discardRectangleChanges.bind(this);
    this.saveRectangle = this.saveRectangle.bind(this);
    this.editRectangle = this.editRectangle.bind(this);
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    const position = getScrollFromLocalStorage();
    dispatch(await remoteRectanglesFetch(position));
  }

  componentWillUnmount() {
    removeScrollEventListener();
  }

  async handleRemoveClick(rectagnle) {
    const { dispatch } = this.props;
    dispatch(await remoteRectanglesRemove(rectagnle));
  }

  async handleAddNewRectangle() {
    const { dispatch } = this.props;
    dispatch(await remoteRectanglesCreate());
  }

  async saveRectangle() {
    const { dispatch, selectedRectangle, editorModeIsActive } = this.props;
    dispatch(await remoteRectanglesUpdate(selectedRectangle));
    dispatch(editorMode(!editorModeIsActive));
  }

  openEditor(rectangle) {
    const { dispatch, editorModeIsActive } = this.props;
    dispatch(editorMode(!editorModeIsActive));
    dispatch(selectRectagle(rectangle));
    dispatch(selectOriginalRectagle(rectangle));
  }

  discardRectangleChanges() {
    const { dispatch, originalRectangle, editorModeIsActive } = this.props;
    dispatch(editorMode(!editorModeIsActive));
    dispatch(selectRectagle(originalRectangle));
    dispatch(restoreRectangle(originalRectangle));
  }

  editRectangle(rectangle) {
    const selectedRectangle = Rectangle(rectangle);
    const { dispatch } = this.props;
    dispatch(selectRectagle(selectedRectangle));
  }

  render() {
    const { rectangles, editorModeIsActive, selectedRectangle } = this.props;
    return (<GalleryComponent
      rectangles={rectangles}
      handleAddNewRectangle={this.handleAddNewRectangle}
      editorModeIsActive={editorModeIsActive}
      discardRectangleChanges={this.discardRectangleChanges}
      saveRectangle={this.saveRectangle}
      editRectangle={this.editRectangle}
      openEditor={this.openEditor}
      handleRemoveClick={this.handleRemoveClick}
      selectedRectangle={selectedRectangle}
    />);
  }
}

function mapStateToProps(state) {
  const { galleryReducer } = state;
  return {
    rectangles: galleryReducer.rectangles,
    selectedRectangle: galleryReducer.selectedRectangle,
    editorModeIsActive: !!galleryReducer.editorModeIsActive,
    originalRectangle: galleryReducer.originalRectangle,
  };
}

export const Gallery = connect(mapStateToProps)(GalleryContainer);

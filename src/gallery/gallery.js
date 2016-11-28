import React, { PropTypes } from 'react';
import Rectangle from 'output/model';
import Output from 'output';
import Editor from 'editor';
import 'gallery/_gallery.scss';

const createRectangles = (rectangles, openEditorHandler, removeHandler) => (
  rectangles.map((rect, keyId) => {
    const rectangle = Rectangle(rect);
    const fnRemove = removeHandler.bind(this, rect);
    const fnOpenEditor = openEditorHandler.bind(this, rect);
    return (<li
      key={keyId}
      className="c-galery"
    ><div className="c-galery__output">
      <a
        onClick={fnRemove}
        className="c-app__button c-app__button--red"
        title="remove rectangle"
      >remove</a>
      <Output
        onClick={fnOpenEditor}
        id={rect._id}
        title="click to edit in editor"
        styles={rectangle.styles}
      />
    </div>
    </li>);
  }));

const GalleryComponent = (props) => {
  const {
    rectangles,
    handleAddNewRectangle,
    editorModeIsActive,
    discardRectangleChanges,
    saveRectangle,
    editRectangle,
    openEditor,
    handleRemoveClick,
    selectedRectangle } = props;
  if (editorModeIsActive) {
    return (<Editor
      discard={discardRectangleChanges}
      save={saveRectangle}
      editRectangle={editRectangle}
      rectangle={selectedRectangle}
    />);
  }
  const components =
    createRectangles(rectangles, openEditor, handleRemoveClick);
  return (<main role="main">
    <button
      onClick={handleAddNewRectangle}
      className="c-app__button c-app__button--orange"
      title="add rectangle"
    >add empty rectagle
    </button>
    <h1>Gallery</h1>
    <ul className="c-galery">
      {components}
    </ul>
  </main>);
};

GalleryComponent.propTypes = {
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
  handleAddNewRectangle: PropTypes.func,
  openEditor: PropTypes.func,
  handleRemoveClick: PropTypes.func,
  discardRectangleChanges: PropTypes.func,
  saveRectangle: PropTypes.func,
  editRectangle: PropTypes.func,
};

export default GalleryComponent;

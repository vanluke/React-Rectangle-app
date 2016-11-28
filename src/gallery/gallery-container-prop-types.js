import { PropTypes } from 'react';

const propTypes = {
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

export default propTypes;

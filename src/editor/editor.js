import React, { PropTypes } from 'react';
import ColorPicker from 'editor/react-color-picker';
import FormRangeItem from 'editor/form-range';
import Output from 'output';
import FormItem from 'editor/form-item';
import 'editor/_editor.scss';

const Editor = (props) => {
  const {
    submit,
    handleFormChange,
    styles,
    rectangle,
    setRefs,
    discard,
  } = props;
  return (<div className="c-editor">
    <form
      onSubmit={submit}
      className="l-editor"
    >
      <a
        onClick={discard}
        className="c-editor__close"
        aria-hidden="true"
        title="close"
      >close
    </a>
      <h3 className="c-editor__header">Editor</h3>
      <div className="c-editor__form">
        <FormItem>
          <label
            className="c-editor__label"
            htmlFor="background-colour"
          >background color
          </label>
          <div>
            <ColorPicker
              color={styles.background}
              handleChangeComplete={handleFormChange}
            />
          </div>
        </FormItem>
        <FormRangeItem
          label="width"
          onChange={handleFormChange}
          value={rectangle.width}
          setRefs={setRefs}
          refName="width"
          min="1"
          max="550"
          step="1"
        />
        <FormRangeItem
          label="height"
          onChange={handleFormChange}
          value={rectangle.height}
          setRefs={setRefs}
          refName="height"
          min="1"
          max="550"
          step="1"
        />
        <FormRangeItem
          label="border radius"
          onChange={handleFormChange}
          value={rectangle.borderRadius}
          setRefs={setRefs}
          min="1"
          max="10"
          step="1"
          refName="borderRadius"
        />
      </div>
      <div>
        <button
          className="c-app__button c-app__button--green"
          type="submit"
        >save</button>
        <button
          className="c-app__button c-app__button--red"
          onClick={discard}
        >discard</button>
      </div>
      <div>
        <h3 className="c-editor__header">Output</h3>
        <Output
          styles={styles}
          title="Output"
        />
      </div>
    </form>
  </div>);
};

Editor.propTypes = {
  submit: PropTypes.func,
  handleFormChange: PropTypes.func,
  styles: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    borderRadius: PropTypes.string,
    background: PropTypes.string,
  }),
  setRefs: PropTypes.func,
  discard: PropTypes.func,
  rectangle: PropTypes.shape({
    _id: PropTypes.string,
  }),
};

export default Editor;

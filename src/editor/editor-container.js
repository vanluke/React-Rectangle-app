import React, { PropTypes, PureComponent } from 'react';
import Editor from 'editor/editor';
import rangeEventPolyfill from 'range-polyfill';

export class EditorContainer extends PureComponent {
  static propTypes = {
    rectangle: PropTypes.shape({
      _id: PropTypes.string,
      background: PropTypes.string,
      styles: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
        borderRadius: PropTypes.string,
        background: PropTypes.string,
      }),
    }).isRequired,
    save: PropTypes.func.isRequired,
    discard: PropTypes.func.isRequired,
    editRectangle: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(...props);
    this.formRefs = {};
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submit = this.submit.bind(this);
    this.setRefs = this.setRefs.bind(this);
    this.discard = this.discard.bind(this);
  }

  componentDidMount() {
    rangeEventPolyfill('width', this.handleFormChange);
    rangeEventPolyfill('height', this.handleFormChange);
    rangeEventPolyfill('border-radius', this.handleFormChange);
  }

  setRefs(obj, ref) {
    this.formRefs[obj] = ref;
  }

  discard(e) {
    e.preventDefault();
    this.props.discard();
  }

  submit(e) {
    e.preventDefault();
    this.props.save();
  }

  handleFormChange(value) {
    const { editRectangle, rectangle } = this.props;
    editRectangle({
      ...rectangle,
      width: this.formRefs.width.value,
      height: this.formRefs.height.value,
      borderRadius: this.formRefs.borderRadius.value,
      background: typeof value === 'string'
        ? value
        : this.props.rectangle.background,
    });
  }

  render() {
    const { styles } = this.props.rectangle;
    return (<Editor
      submit={this.submit}
      handleFormChange={this.handleFormChange}
      styles={styles}
      setRefs={this.setRefs}
      discard={this.discard}
      rectangle={this.props.rectangle}
    />);
  }
}

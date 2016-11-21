import React, { PropTypes } from 'react';
import FormItem from './form-item';

const FormRangeItem = (props) => {
  const {
    label,
    onChange,
    value,
    setRefs,
    refName,
    min,
    max,
    step } = props;
  return (<FormItem>
    <label
      htmlFor={refName}
      className="c-editor__label"
    >{label}
    </label>
    <input
      id={refName}
      name={refName}
      type="range"
      min={min}
      max={max}
      step={step}
      ref={r => setRefs(refName, r)}
      className="c-editor__range"
      onInput={onChange}
      onChange={onChange}
      value={value}
    />
  </FormItem>);
};

FormRangeItem.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  setRefs: PropTypes.func,
  refName: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
};
export default FormRangeItem;

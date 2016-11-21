import React, { PropTypes } from 'react';

const FormItem = ({ children }) =>
(<div className="c-editor__form__item">
  {children}
</div>);

FormItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default FormItem;

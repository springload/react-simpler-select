import React from 'react';
import PropTypes from 'prop-types';

// Filters props to remove before transmission to the select element.
const filterProps = (props) => {
  return Object.keys(props)
    .filter(k => ['onChange', 'options', 'placeholder'].indexOf(k) === -1)
    .reduce((filtered, k) => {
      // eslint-disable-next-line no-param-reassign
      filtered[k] = props[k];
      return filtered;
    }, {});
};

const renderOption = option => (
  <option
    key={option.value}
    value={option.value}
    disabled={option.disabled}
  >
    {option.label}
  </option>
);

const renderOptions = (options, placeholder) => {
  const children = options.map((item) => {
    let child;

    if (item.options) {
      child = (
        <optgroup label={item.title} key={item.id}>
          {item.options.map(renderOption)}
        </optgroup>
      );
    } else {
      child = renderOption(item);
    }

    return child;
  });

  if (placeholder) {
    children.unshift(renderOption({ label: placeholder, value: '', disabled: true }));
  }

  return children;
};

const handleChange = (multiple, onChange, e) => {
  let value;

  if (multiple) {
    value = Array.prototype.slice.call(e.target.options)
      .filter(option => option.selected)
      .map(option => option.value);
  } else {
    value = e.target.value;
  }

  onChange(value);
};

/**
 * The Select component. Renders to a plain HTML <select>.
 */

const propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
};

const defaultProps = {
  placeholder: null,
  value: null,
};

const Select = (props) => {
  const { value, options, placeholder, onChange } = props;
  const multiple = Array.isArray(value);

  return (
    <select
      {...filterProps(props)}
      onChange={handleChange.bind(null, multiple, onChange)}
      multiple={multiple}
    >
      {renderOptions(options, placeholder)}
    </select>
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;

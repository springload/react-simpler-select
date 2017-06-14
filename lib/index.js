import React from 'react';
import PropTypes from 'prop-types';

// Converts a DOM NodeList or other iterable to a JS array.
const toArray = iterable => Array.prototype.slice.call(iterable);

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

class Select extends React.Component {
  handleChange(e) {
    let value;

    if (this.isMultiSelect()) {
      value = toArray(e.target.options)
        .filter(option => option.selected)
        .map(option => option.value);
    } else {
      value = e.target.value;
    }

    this.props.onChange(value);
  }

  isMultiSelect() {
    const { value } = this.props;

    return Array.isArray(value);
  }

  renderChildren() {
    const { options, placeholder } = this.props;

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
  }

  render() {
    return (
      <select
        {...filterProps(this.props)}
        onChange={e => this.handleChange(e)}
        multiple={this.isMultiSelect()}
      >
        {this.renderChildren()}
      </select>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;

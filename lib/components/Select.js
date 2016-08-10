import React from 'react';

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

/**
 * The Select component. Renders to a plain HTML <select>.
 */
export default React.createClass({
  displayName: 'Select',

  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    options: React.PropTypes.array.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.any,
  },

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
  },

  isMultiSelect() {
    const { value } = this.props;

    return Array.isArray(value);
  },

  renderOption(option) {
    return (
      <option
        key={option.value}
        value={option.value}
        disabled={option.disabled}
      >
        {option.label}
      </option>
    );
  },

  renderChildren() {
    const { options, placeholder } = this.props;

    const children = options.map((item) => {
      let child;

      if (item.options) {
        child = (
          <optgroup label={item.title}  key={item.id}>
            {item.options.map(this.renderOption)}
          </optgroup>
        );
      } else {
        child = this.renderOption(item);
      }

      return child;
    });

    if (placeholder) {
      children.unshift(this.renderOption({ label: placeholder, value: '', disabled: true }));
    }

    return children;
  },

  render() {
    return (
      <select
        {...filterProps(this.props)}
        onChange={this.handleChange}
        multiple={this.isMultiSelect()}
      >
        {this.renderChildren()}
      </select>
    );
  },
});

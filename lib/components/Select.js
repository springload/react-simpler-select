/* eslint-disable comma-dangle */
import React from 'react';

export default React.createClass({
  displayName: 'ReactSimplerSelect',

  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    options: React.PropTypes.array,
  },

  getDefaultProps() {
    return {
      placeholder: null,
      options: [],
    };
  },

  handleChange(e) {
    this.props.onChange(e.target.value);
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
      children.unshift(this.renderOption({ key: 'placeholder', value: '', disabled: true, label: placeholder }));
    }

    return children;
  },

  render() {
    return (
      <select
        {...this.props}
        onChange={this.handleChange}
      >
        {this.renderChildren()}
      </select>
    );
  },
});

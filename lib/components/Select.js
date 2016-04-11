/* eslint-disable comma-dangle */
import React from 'react';

export default React.createClass({
  displayName: 'ReactSimplerSelect',

  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string,
    // TODO Double check value is useful
    value: React.PropTypes.any,
    groups: React.PropTypes.array,
    options: React.PropTypes.array,
  },

  getDefaultProps() {
    return {
      placeholder: null,
      value: null,
      groups: null,
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
    const { options, placeholder, groups } = this.props;
    const children = [];

    if (placeholder) {
      children.push(this.renderOption({ key: 'placeholder', value: '', disabled: true, label: placeholder }));
    }

    if (groups) {
      groups.forEach((group) => {
        const groupOptions = [];

        options.forEach((item) => {
          if (group.groupId === item.groupId) {
            groupOptions.push(this.renderOption(item));
          }
        });

        if (!groupOptions.length) {
          return;
        }

        children.push(
          <optgroup label={group.title}  key={group.groupId}>{groupOptions}</optgroup>
        );
      });
    } else {
      options.forEach((item) => {
        children.push(this.renderOption(item));
      });
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

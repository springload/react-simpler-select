import React from 'react';

const filterProps = (props) => {
  return Object.keys(props)
    .filter(k => ['onChange', 'options', 'placeholder'].indexOf(k) === -1)
    .reduce((filtered, k) => {
      // eslint-disable-next-line no-param-reassign
      filtered[k] = props[k];
      return filtered;
    }, {});
};

export default React.createClass({
  displayName: 'ReactSimplerSelect',

  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    options: React.PropTypes.array.isRequired,
    placeholder: React.PropTypes.string,
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
      children.unshift(this.renderOption({ label: placeholder, value: '', disabled: true }));
    }

    return children;
  },

  render() {
    return (
      <select
        {...filterProps(this.props)}
        onChange={this.handleChange}
      >
        {this.renderChildren()}
      </select>
    );
  },
});

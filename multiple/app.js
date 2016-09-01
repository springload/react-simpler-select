import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../../lib/index';

const options = [
  { value: 'es', label: 'Spanish' },
  { value: 'cs', label: 'Czech' },
  { value: 'en', label: 'English' },
  { value: 'fi', label: 'Finnish' },
  { value: 'fr', label: 'French' },
];

const App = React.createClass({
  getInitialState() {
    return {
      values: [''],
    };
  },

  handleChange(newValues) {
    this.setState({
      values: newValues,
    });
  },

  render() {
    return (
      <Select
        name="multiple-languages"
        value={this.state.values}
        options={options}
        onChange={this.handleChange}
      />
    );
  },
});

ReactDOM.render(<App />, document.querySelector('[data-multiple-example]'));

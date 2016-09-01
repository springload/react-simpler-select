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
      value: '',
    };
  },

  handleChange(newValue) {
    this.setState({
      value: newValue,
    });
  },

  render() {
    return (
      <Select
        name="languages"
        placeholder="Choose"
        value={this.state.value}
        options={options}
        onChange={this.handleChange}
        required
      />
    );
  },
});

ReactDOM.render(<App />, document.querySelector('[data-basic-example]'));

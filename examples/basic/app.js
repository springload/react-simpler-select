import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../../lib/index';

const options = [
  { value: 'cs', label: 'Czech' },
  { value: 'en', label: 'English' },
  { value: 'fi', label: 'Finnish' },
  { value: 'fr', label: 'French' },
];

const decision = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

const App = React.createClass({
  getInitialState() {
    return {
      value: 'fr',
    };
  },

  handleChange(newValue) {
    this.setState({
      value: newValue,
    });
  },

  render() {
    const value = this.state.value;

    return (
      <div className="example">
        <h1>React Simpler Select example</h1>
        <Select
          name="decision"
          id="decision-selector"
          placeholder="Your decision"
          options={decision}
          required
        />

        <Select
          name="languages"
          className="languages"
          placeholder="Pick an item"
          value={value}
          options={options}
          onChange={this.handleChange}
        />

      </div>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('container'));

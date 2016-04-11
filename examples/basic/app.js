/* eslint-disable comma-dangle */
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
      value: '',
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

        <form action="">
          <label htmlFor="decision-selector">Decision</label>
          <Select
            name="decision"
            id="decision-selector"
            options={decision}
            autoFocus
          />

          <Select
            name="languages"
            className="u-border"
            placeholder="Choose"
            value={value}
            options={options}
            onChange={this.handleChange}
            required
          />

          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('container'));

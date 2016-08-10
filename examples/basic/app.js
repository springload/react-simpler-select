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

const optgroups = [
  {
    title: 'North Island',
    id: 'ni',
    options: [
      { value: 'wgtn', label: 'Wellington' },
      { value: 'gsb', label: 'Gisbourne' },
      { value: 'oh', label: 'Ohakune' },
    ]
  },
  {
    title: 'South Island',
    id: 'si',
    options: [
      { value: 'ch', label: 'Christchurch' },
      { value: 'qt', label: 'Queenstown' },
      { value: 'te', label: 'lake Tekapo' },
    ]
  },
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
        <form action="">
          <label htmlFor="decision-selector">Decision</label>

          <Select
            name="languages"
            placeholder="Choose"
            value={value}
            options={options}
            onChange={this.handleChange}
            required
          />

          <Select
            name="cities"
            placeholder="Choose"
            options={optgroups}
            required
            onChange={console.log.bind(console)}
          />

          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  },
});

ReactDOM.render(<App />, document.querySelector('[data-basic-example]'));

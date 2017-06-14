import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../lib/index';

const options = [
  { value: 'es', label: 'Spanish' },
  { value: 'cs', label: 'Czech' },
  { value: 'en', label: 'English' },
  { value: 'fi', label: 'Finnish' },
  { value: 'fr', label: 'French' },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [''],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newValues) {
    this.setState({
      values: newValues,
    });
  }

  render() {
    const { values } = this.state;

    return (
      <Select
        name="multiple-languages"
        value={values}
        options={options}
        onChange={this.handleChange}
      />
    );
  }
}

ReactDOM.render(<App />, document.querySelector('[data-mount-multiple]'));

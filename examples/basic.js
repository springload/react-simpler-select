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
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newValue) {
    this.setState({
      value: newValue,
    });
  }

  render() {
    const { value } = this.state;

    return (
      <Select
        name="languages"
        placeholder="Choose"
        value={value}
        options={options}
        onChange={this.handleChange}
        required
      />
    );
  }
}

ReactDOM.render(<App />, document.querySelector('[data-mount-basic]'));

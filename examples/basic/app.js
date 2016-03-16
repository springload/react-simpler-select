import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../../lib/index';

const options = [
    { value: 'cs', label: 'Czech' },
    { value: 'en', label: 'English' },
    { value: 'fi', label: 'Finnish' },
    { value: 'fr', label: 'French' },
];

const App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>React Simpler Select example</h1>
        <Select placeholder="Pick an item" options={options} />
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));

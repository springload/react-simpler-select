import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../../lib/index';

const App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>React Simpler Select example</h1>
        <Select/>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));

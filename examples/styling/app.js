import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../../lib/index';

const options = [
  { label: 'C', value: 'c' },
  { label: 'C#', value: 'cs' },
  { label: 'C++', value: 'cpp' },
  { label: 'Clojure', value: 'clojure' },
  { label: 'Elm', value: 'elm' },
  { label: 'Go', value: 'go' },
  { label: 'Haskell', value: 'haskell' },
  { label: 'Java', value: 'java' },
  { label: 'Javascript', value: 'javascript' },
  { label: 'Perl', value: 'perl' },
  { label: 'PHP', value: 'php' },
  { label: 'Python', value: 'python' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'Scala', value: 'scala' },
];

// eslint-disable-next-line no-console
const onChange = console.log.bind(console);

const select = (
  <div className="select-wrapper">
    <Select
      name="programming"
      placeholder="Pick a language"
      options={options}
      required
      onChange={onChange}
    />
  </div>
);

const mount = document.querySelector('[data-styling-example]');

ReactDOM.render(select, mount);

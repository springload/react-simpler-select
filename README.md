React Simpler Select [![npm](https://img.shields.io/npm/v/react-simpler-select.svg?style=flat-square)](https://www.npmjs.com/package/react-simpler-select) [![Build Status](https://travis-ci.org/springload/react-simpler-select.svg?branch=master)](https://travis-ci.org/springload/react-simpler-select) [![devDependency Status](https://david-dm.org/springload/react-simpler-select/dev-status.svg)](https://david-dm.org/springload/react-simpler-select#info=devDependencies)
===================

> React component that renders a select. Supports a list of options or optgroups. [Demo](https://springload.github.io/react-simpler-select/)

## Features

## Installation

`npm install --save react-simpler-select`

## Usage

```js
import Select from 'react-simpler-select';

const options = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
];

// `onChange` gets called with the value that is selected.
<Select
  value="en"
  options={options}
  onChange={this.handleChange}
/>

// Use the `placeholder` prop if the select doesn't have a value by default:
<Select
  options={options}
  onChange={this.handleChange}
  placeholder="Please pick a country"
/>

// Add props as you go, they will be transfered to the `select` element.
<Select
  value="en"
  options={options}
  onChange={this.handleChange}
  autoFocus
  required
/>

// Supports `optgroup`s with their own array of options
const optgroups = [
  {
    title: 'North Island',
    id: 'ni',
    options: [ { value: 'wgtn', label: 'Wellington' }, { value: 'gsb', label: 'Gisbourne' } ]
  },
  {
    title: 'South Island',
    id: 'si',
    options: [ { value: 'ch', label: 'Christchurch' }, { value: 'qt', label: 'Queenstown' } ]
  },
];

<Select options={optgroups}/>
```

## Contributing

### Install / useful commands

You need `npm install -g rackt-cli@0.5.3` to execute some of these commands.

- `npm install` install node dependencies
- `npm start` run server
- `npm test` run tests
- `npm build` build component
- `npm publish` publish component to npm (verify version in package.json)
- `rackt pages` rebuild gh-pages branch

### Guidelines

- Use pull requests to collaborate around new changes
- Document changes in the project's [CHANGELOG](CHANGELOG.md)

## LICENSE

The MIT License (MIT)

Copyright (c) 2016 Springload

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



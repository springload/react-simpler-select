# [react-simpler-select](https://springload.github.io/react-simpler-select/) [![npm](https://img.shields.io/npm/v/react-simpler-select.svg)](https://www.npmjs.com/package/react-simpler-select) [![Build Status](https://travis-ci.org/springload/react-simpler-select.svg?branch=master)](https://travis-ci.org/springload/react-simpler-select) [![Coverage Status](https://coveralls.io/repos/github/springload/react-simpler-select/badge.svg)](https://coveralls.io/github/springload/react-simpler-select)

> React component that renders a select. Supports optgroups, multiple selections.

Check out the [online demo](https://springload.github.io/react-simpler-select/)!

## Features

- Renders a plain, accessible HTML `<select>`.
- Generates `<option>` elements itself from the expected data structure.
- Has a `placeholder` prop to create a placeholder option at the top of the select.
- Generates `<optgroup>` elements if the `options` follow the expected data structure.
- `onChange` returns supports single and `multiple` values in a convenient format.

## Installation

```sh
npm install --save react-simpler-select
```

## Usage

```jsx
import Select from 'react-simpler-select';

const options = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
];

<Select
  placeholder="Choose a language"
  value="en"
  options={options}
  onChange={onChange}
/>

// Add props as you go, they will be transfered to the `select` element.
<Select
  value="en"
  options={options}
  onChange={this.handleChange}
  autoFocus
/>

// Supports `optgroup`s with their own array of options.
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

// Supports `multiple` select. Just make the `value` prop an array, and get selected options as an array in the `onChange` callback.
<Select value={[ 'ch', 'qt']}/>
```

## Development

### Install

> Clone the project on your computer, and install [Node](https://nodejs.org). This project also uses [nvm](https://github.com/creationix/nvm).

```sh
nvm install
# Then, install all project dependencies.
npm install
# Install the git hooks.
./.githooks/deploy
```

### Working on the project

> Everything mentioned in the installation process should already be done.

```sh
# Make sure you use the right node version.
nvm use
# Start the server and the development tools.
npm run start
# Runs linting.
npm run lint
# Runs tests.
npm run test
# View other available commands with:
npm run
```

### Releases

- Make a new branch for the release of the new version.
- Update the [CHANGELOG](CHANGELOG.md).
- Update the version number in `package.json`, following semver.
- Make a PR and squash merge it.
- Back on master with the PR merged, follow the instructions below.

```sh
npm run dist
# Use irish-pub to check the package content. Install w/ npm install -g first.
irish-pub
npm publish
```

- Finally, go to GitHub and create a release and a tag for the new version.
- Done!

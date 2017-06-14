# Changelog

> All notable changes to this project are documented in this file. This project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## Unreleased

## [[v3.0.0]](https://github.com/springload/react-simpler-select/releases/tag/v3.0.0)

### Added

- Add `prop-types` as peerDependency ([#26](https://github.com/springload/react-simpler-select/pull/26)).
- Add ES module target under `pkg.module` field to enable tree shaking.

### Changed

- Convert all code to be compatible with React 15.5 and React 16 ([#26](https://github.com/springload/react-simpler-select/pull/26)).
- Convert to stateless functional component for file size.

### Removed

- Remove animationend vendor prefixing.
- Remove support for React 0.14.7, 0.14.8, 15.1, 15.2.
- Remove UMD build.
- Start compiling only for latest browser versions and IE11.

## [[v2.0.1]](https://github.com/springload/react-simpler-select/releases/tag/v2.0.1)

### Added

- Supports multi select (HTML `multiple` attribute).

### Changed

- displayName is now `Select`.

## [[v2.0.0]](https://github.com/springload/react-simpler-select/releases/tag/v2.0.0)

### Added

- `options` are now required (the array can be empty)
- Supports React 15.2

### Fixed

- `unknown-prop` warning with React 15.2 (https://github.com/springload/react-simpler-select/issues/23)

### Removed

- Removed unused key for placeholder option (keys should not be relied upon anyway)

## [[v1.1.0]](https://github.com/springload/react-simpler-select/releases/tag/v1.1.0)

### Added

- Support for React 15

## [[v1.0.0]](https://github.com/springload/react-simpler-select/releases/tag/v1.0.0)

First stable release!

-------------

## [[x.y.z]](https://github.com/springload/react-simpler-select/releases/tag/x.y.z) (Template: http://keepachangelog.com/)

### Added

- Something was added to the API / a new feature was introduced.

### Changed

### Fixed

### Removed

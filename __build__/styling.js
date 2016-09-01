webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _libIndex = __webpack_require__(175);

	var _libIndex2 = _interopRequireDefault(_libIndex);

	var options = [{ label: 'C', value: 'c' }, { label: 'C#', value: 'cs' }, { label: 'C++', value: 'cpp' }, { label: 'Clojure', value: 'clojure' }, { label: 'Elm', value: 'elm' }, { label: 'Go', value: 'go' }, { label: 'Haskell', value: 'haskell' }, { label: 'Java', value: 'java' }, { label: 'Javascript', value: 'javascript' }, { label: 'Perl', value: 'perl' }, { label: 'PHP', value: 'php' }, { label: 'Python', value: 'python' }, { label: 'Ruby', value: 'ruby' }, { label: 'Scala', value: 'scala' }];

	// eslint-disable-next-line no-console
	var onChange = console.log.bind(console);

	var select = _react2['default'].createElement(
	  'div',
	  { className: 'select-wrapper' },
	  _react2['default'].createElement(_libIndex2['default'], {
	    name: 'programming',
	    placeholder: 'Pick a language',
	    options: options,
	    required: true,
	    onChange: onChange
	  })
	);

	var mount = document.querySelector('[data-styling-example]');

	_reactDom2['default'].render(select, mount);

/***/ }
]);
webpackJsonp([1],[
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

	var options = [{ value: 'es', label: 'Spanish' }, { value: 'cs', label: 'Czech' }, { value: 'en', label: 'English' }, { value: 'fi', label: 'Finnish' }, { value: 'fr', label: 'French' }];

	var App = _react2['default'].createClass({
	  displayName: 'App',

	  getInitialState: function getInitialState() {
	    return {
	      values: ['']
	    };
	  },

	  handleChange: function handleChange(newValues) {
	    this.setState({
	      values: newValues
	    });
	  },

	  render: function render() {
	    return _react2['default'].createElement(_libIndex2['default'], {
	      name: 'multiple-languages',
	      value: this.state.values,
	      options: options,
	      onChange: this.handleChange
	    });
	  }
	});

	_reactDom2['default'].render(_react2['default'].createElement(App, null), document.querySelector('[data-multiple-example]'));

/***/ }
]);
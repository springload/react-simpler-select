(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactSimplerSelect"] = factory(require("React"));
	else
		root["ReactSimplerSelect"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _componentsSelect = __webpack_require__(1);
	
	var _componentsSelect2 = _interopRequireDefault(_componentsSelect);

	exports['default'] = _componentsSelect2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var filterProps = function filterProps(props) {
	  return Object.keys(props).filter(function (k) {
	    return ['onChange', 'options', 'placeholder'].indexOf(k) === -1;
	  }).reduce(function (filtered, k) {
	    // eslint-disable-next-line no-param-reassign
	    filtered[k] = props[k];
	    return filtered;
	  }, {});
	};
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'ReactSimplerSelect',
	
	  propTypes: {
	    onChange: _react2['default'].PropTypes.func.isRequired,
	    options: _react2['default'].PropTypes.array.isRequired,
	    placeholder: _react2['default'].PropTypes.string
	  },
	
	  handleChange: function handleChange(e) {
	    this.props.onChange(e.target.value);
	  },
	
	  renderOption: function renderOption(option) {
	    return _react2['default'].createElement(
	      'option',
	      {
	        key: option.value,
	        value: option.value,
	        disabled: option.disabled
	      },
	      option.label
	    );
	  },
	
	  renderChildren: function renderChildren() {
	    var _this = this;
	
	    var _props = this.props;
	    var options = _props.options;
	    var placeholder = _props.placeholder;
	
	    var children = options.map(function (item) {
	      var child = undefined;
	
	      if (item.options) {
	        child = _react2['default'].createElement(
	          'optgroup',
	          { label: item.title, key: item.id },
	          item.options.map(_this.renderOption)
	        );
	      } else {
	        child = _this.renderOption(item);
	      }
	
	      return child;
	    });
	
	    if (placeholder) {
	      children.unshift(this.renderOption({ label: placeholder, value: '', disabled: true }));
	    }
	
	    return children;
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'select',
	      _extends({}, filterProps(this.props), {
	        onChange: this.handleChange
	      }),
	      this.renderChildren()
	    );
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-simpler-select.js.map
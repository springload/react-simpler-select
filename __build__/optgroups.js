webpackJsonp([2],[
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

	var optgroups = [{
	  title: 'North Island',
	  id: 'north-island',
	  options: [{ value: 'auckland-region', label: 'Auckland Region' }, { value: 'bay-of-plenty', label: 'Bay of Plenty' }, { value: 'gisborne', label: 'Gisborne' }, { value: 'hawkes-bay', label: 'Hawke\'s Bay' }, { value: 'manawatu-whanganui', label: 'Manawatu / Whanganui' }, { value: 'northland', label: 'Northland' }, { value: 'taranaki', label: 'Taranaki' }, { value: 'waikato', label: 'Waikato' }, { value: 'wairarapa', label: 'Wairarapa' }, { value: 'wellington-region', label: 'Wellington Region' }]
	}, {
	  title: 'South Island',
	  id: 'south-island',
	  options: [{ value: 'central-otago', label: 'Central Otago' }, { value: 'marlborough', label: 'Marlborough' }, { value: 'nelson', label: 'Nelson' }, { value: 'north-canterbury', label: 'North Canterbury' }, { value: 'otago', label: 'Otago' }, { value: 'south-canterbury', label: 'South Canterbury' }, { value: 'southland', label: 'Southland' }, { value: 'tasman-golden-bay', label: 'Tasman / Golden Bay' }, { value: 'west-coast', label: 'West Coast' }]
	}];

	// eslint-disable-next-line no-console
	var onChange = console.log.bind(console);

	var select = _react2['default'].createElement(_libIndex2['default'], {
	  name: 'regions',
	  options: optgroups,
	  required: true,
	  onChange: onChange
	});

	var mount = document.querySelector('[data-optgroups-example]');

	_reactDom2['default'].render(select, mount);

/***/ }
]);
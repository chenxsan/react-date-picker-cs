/**
 * 
 * Created by sam on 7/24/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _week = require('./week');

var _week2 = _interopRequireDefault(_week);

exports['default'] = _react2['default'].createClass({
	displayName: 'weekDays',

	propTypes: {
		day: _react2['default'].PropTypes.number.isRequired,
		highlight: _react2['default'].PropTypes.bool,
		locale: _react2['default'].PropTypes.string,
		month: _react2['default'].PropTypes.number.isRequired,
		range: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number),
		selectDay: _react2['default'].PropTypes.func.isRequired,
		year: _react2['default'].PropTypes.number.isRequired
	},
	selectDay: function selectDay(val) {
		this.props.selectDay(val);
	},
	render: function render() {

		// 计算某年某月总共的天数
		var days = new Date(this.props.year, this.props.month, 0).getDate(); // 8 月 0 号即 7 月最后一天

		// 该月第一天是周几，0 是周天，1 是周一
		var firstDay = new Date(this.props.year, this.props.month - 1, 1).getDay();

		var range = [].concat(_toConsumableArray(Array(days))).map(function (_, i) {
			return i + 1;
		});

		for (var i = 0, l = firstDay; i < l; i++) {
			range.unshift(undefined);
		}

		var chunks = []; // 分割成长度为 7 的数组段

		while (range.length > 0) {
			chunks.push(range.splice(0, 7));
		}

		var weekDays = [];
		for (var j = 0, len = chunks.length; j < len; j++) {
			// 如果 chunks[j] 长度不足 7，则补充到 7
			if (chunks[j].length < 7) {
				for (var m = chunks[j].length, n = 7; m < n; m++) {
					chunks[j].push(undefined);
				}
			}
			weekDays.push(_react2['default'].createElement(_week2['default'], { key: j, highlight: this.props.highlight, days: chunks[j], selectDay: this.selectDay, day: Number(this.props.day) }));
		}
		var weekTitle;
		if (this.props.locale === 'zh') {
			weekTitle = ['日', '一', '二', '三', '四', '五', '六'].map(function (v) {
				return _react2['default'].createElement(
					'th',
					{ key: v },
					v
				);
			});
		} else {
			weekTitle = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(function (v) {
				return _react2['default'].createElement(
					'th',
					{ key: v },
					v
				);
			});
		}

		return _react2['default'].createElement(
			'table',
			null,
			_react2['default'].createElement(
				'thead',
				null,
				_react2['default'].createElement(
					'tr',
					null,
					weekTitle
				)
			),
			_react2['default'].createElement(
				'tbody',
				null,
				weekDays
			)
		);
	}
});
module.exports = exports['default'];
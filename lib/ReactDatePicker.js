/**
 * Created by sam on 7/23/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _getTodayMixin = require('./getTodayMixin');

var _getTodayMixin2 = _interopRequireDefault(_getTodayMixin);

exports['default'] = _react2['default'].createClass({
	displayName: 'ReactDatePicker',

	mixins: [_getTodayMixin2['default']],
	getDefaultProps: function getDefaultProps() {
		return {
			disabled: false,
			range: [2010, 2020],
			locale: 'en',
			onChange: function onChange(date) {
				// i will give you the date
				// you also can decide whether to hide the popup calendar by passing this.props.isCalendarShow
			},
			onFocusIn: function onFocusIn() {},
			value: ''
		};
	},
	propTypes: {
		disabled: _react2['default'].PropTypes.bool,
		locale: _react2['default'].PropTypes.string,
		onChange: _react2['default'].PropTypes.func.isRequired,
		onFocusIn: _react2['default'].PropTypes.func,
		range: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number),
		value: _react2['default'].PropTypes.string
	},
	onClickCalendar: function onClickCalendar(date) {
		this.props.onChange(date);
	},
	selectToday: function selectToday() {
		var today = this.getToday();
		this.props.onChange(today);
	},
	calender: function calender() {
		return _react2['default'].createElement(_calendar2['default'], { onClickCalendar: this.onClickCalendar, date: this.props.value, selectToday: this.selectToday, range: this.props.range, locale: this.props.locale });
	},
	focusIn: function focusIn() {
		if (this.props.disabled === true) {
			return;
		}
		this.props.onFocusIn();
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: "datePicker" },
			_react2['default'].createElement('input', { className: 'datePicker__input ' + (this.props.disabled === true ? 'datePicker__input--disabled' : ''), type: 'text', onFocus: this.focusIn, value: this.props.value, readOnly: true, disabled: this.props.disabled }),
			this.props.isCalendarShow === false ? null : this.calender()
		);
	}
});
module.exports = exports['default'];
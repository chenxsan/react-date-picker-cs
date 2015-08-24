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

var _lodashStringPadLeft = require('lodash/string/padLeft');

var _lodashStringPadLeft2 = _interopRequireDefault(_lodashStringPadLeft);

exports['default'] = _react2['default'].createClass({
	displayName: 'ReactDatePicker',

	getDefaultProps: function getDefaultProps() {
		var today = new Date();
		var year = '' + today.getFullYear();
		var month = '' + (today.getMonth() + 1); // 0 基，但是显示时不可能也 0 基
		var day = '' + today.getDate();
		month = (0, _lodashStringPadLeft2['default'])(month, 2, '0');
		day = (0, _lodashStringPadLeft2['default'])(day, 2, '0');
		today = year + '-' + month + '-' + day;
		return {
			disabled: false,
			range: [2010, 2020],
			locale: 'en',
			onChange: function onChange() {},
			value: today
		};
	},
	propTypes: {
		disabled: _react2['default'].PropTypes.bool,
		locale: _react2['default'].PropTypes.string,
		onChange: _react2['default'].PropTypes.func.isRequired,
		range: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number),
		value: _react2['default'].PropTypes.string
	},
	returnToday: function returnToday() {
		var today = new Date();
		var year = '' + today.getFullYear();
		var month = '' + (today.getMonth() + 1); // 0 基，但是显示时不可能也 0 基
		var day = '' + today.getDate();
		month = (0, _lodashStringPadLeft2['default'])(month, 2, '0');
		day = (0, _lodashStringPadLeft2['default'])(day, 2, '0');
		today = year + '-' + month + '-' + day;
		return today;
	},
	getInitialState: function getInitialState() {
		var today = this.returnToday();
		return {
			isCalendarShow: false
		};
	},
	onClickCalendar: function onClickCalendar(date) {
		this.setState({
			isCalendarShow: false
		});
		this.props.onChange(date);
	},
	selectToday: function selectToday() {
		var today = this.returnToday();

		this.setState({
			isCalendarShow: false
		});
		this.props.onChange(today);
	},
	calender: function calender() {
		return _react2['default'].createElement(_calendar2['default'], { onClickCalendar: this.onClickCalendar, date: this.props.value, selectToday: this.selectToday, range: this.props.range, locale: this.props.locale });
	},
	focusIn: function focusIn() {
		if (this.props.disabled === true) {
			return;
		}
		this.setState({
			isCalendarShow: true
		});
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: "datePicker" },
			_react2['default'].createElement('input', { className: 'datePicker__input ' + (this.props.disabled === true ? 'datePicker__input--disabled' : ''), type: 'text', onFocus: this.focusIn, value: this.props.value, readOnly: true, disabled: this.props.disabled }),
			this.state.isCalendarShow === false ? null : this.calender()
		);
	}
});
module.exports = exports['default'];
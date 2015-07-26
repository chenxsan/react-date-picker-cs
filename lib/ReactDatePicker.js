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
		return {
			range: [2010, 2020]
		};
	},
	returnToday: function returnToday() {
		var today = new Date();
		var year = '' + today.getFullYear();
		var month = '' + (today.getMonth() + 1);
		var day = '' + today.getDate();

		if (month.length < 2) {
			month = '0' + month;
		}
		month = (0, _lodashStringPadLeft2['default'])(month, '0', 2);

		day = (0, _lodashStringPadLeft2['default'])(day, '0', 2);

		today = year + '-' + month + '-' + day;
		return today;
	},
	getInitialState: function getInitialState() {

		var today = this.returnToday();
		return {
			today: today,
			isCalendarShow: false
		};
	},
	onClickCalendar: function onClickCalendar(date) {
		this.setState({
			today: date,
			isCalendarShow: false
		}, function () {
			this.props.onChange(date);
		});
	},
	selectToday: function selectToday() {
		var today = this.returnToday();

		this.setState({
			today: today,
			isCalendarShow: false
		});
	},
	calender: function calender() {
		return _react2['default'].createElement(_calendar2['default'], { onClickCalendar: this.onClickCalendar, date: this.state.today, selectToday: this.selectToday, range: this.props.range });
	},
	focusIn: function focusIn() {
		this.setState({
			isCalendarShow: true
		});
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: "datePicker" },
			_react2['default'].createElement('input', { className: "datePicker__input", type: 'text', onFocus: this.focusIn,
				value: this.state.today, readOnly: true }),
			this.state.isCalendarShow === false ? null : this.calender()
		);
	}
});
module.exports = exports['default'];
/**
 * Created by sam on 7/23/15.
 */
import React from 'react';
import Calendar from './calendar';
import padLeft from 'lodash/string/padLeft';

export default React.createClass({
	getDefaultProps: function () {
		var today = new Date();
		var year = `${today.getFullYear()}`;
		var month = `${today.getMonth() + 1}`; // 0 基，但是显示时不可能也 0 基
		var day = `${today.getDate()}`;
		month = padLeft(month, 2, '0');
		day = padLeft(day, 2, '0');
		today = `${year}-${month}-${day}`;
		return {
			disabled: false,
			range: [2010, 2020],
			locale: 'en',
			onChange: function () {
			},
			value: today
		};
	},
	propTypes: {
		disabled: React.PropTypes.bool,
		locale: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		range: React.PropTypes.arrayOf(React.PropTypes.number),
		value: React.PropTypes.string
	},
	returnToday: function () {
		var today = new Date();
		var year = `${today.getFullYear()}`;
		var month = `${today.getMonth() + 1}`; // 0 基，但是显示时不可能也 0 基
		var day = `${today.getDate()}`;
		month = padLeft(month, 2, '0');
		day = padLeft(day, 2, '0');
		today = `${year}-${month}-${day}`;
		return today;
	},
	getInitialState: function () {
		var today = this.returnToday();
		return {
			isCalendarShow: false
		};

	},
	onClickCalendar: function (date) {
		this.setState({
			isCalendarShow: false
		});
		this.props.onChange(date);
	},
	selectToday: function () {
		var today = this.returnToday();

		this.setState({
			isCalendarShow: false
		});
		this.props.onChange(today);
	},
	calender: function () {
		return (
			<Calendar onClickCalendar={this.onClickCalendar} date={this.props.value} selectToday={this.selectToday} range={this.props.range} locale={this.props.locale}/>
		);
	},
	focusIn: function () {
		if (this.props.disabled === true) {
			return;
		}
		this.setState({
			isCalendarShow: true
		});
	},
	render: function () {
		return (
			<div className="datePicker">
				<input className={`datePicker__input ${this.props.disabled === true ? 'datePicker__input--disabled' : ''}`} type='text' onFocus={this.focusIn} value={this.props.value} readOnly disabled={this.props.disabled}/>
				{this.state.isCalendarShow === false ? null : this.calender()}
			</div>
		);
	}
});

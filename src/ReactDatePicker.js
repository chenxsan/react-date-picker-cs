/**
 * Created by sam on 7/23/15.
 */
import React from 'react';
import Calendar from './calendar';
import padLeft from 'lodash/string/padLeft';

export default React.createClass({
	getDefaultProps: function () {
		return {
			range: [2010, 2020],
			onChange: function () {
			}
		};
	},
	propTypes: {
		onChange: React.PropTypes.func.isRequired,
		range: React.PropTypes.arrayOf(React.PropTypes.number),
		selectedDate: React.PropTypes.string
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
			selectedDate: this.props.selectedDate || today,
			isCalendarShow: false
		};

	},
	onClickCalendar: function (date) {
		this.setState({
			selectedDate: date,
			isCalendarShow: false
		}, function () {
			this.props.onChange(date);
		});
	},
	selectToday: function () {
		var today = this.returnToday();

		this.setState({
			selectedDate: today,
			isCalendarShow: false
		});
	},
	calender: function () {
		return (
			<Calendar onClickCalendar={this.onClickCalendar} date={this.state.selectedDate} selectToday={this.selectToday} range={this.props.range}/>
		);
	},
	focusIn: function () {
		this.setState({
			isCalendarShow: true
		});
	},
	render: function () {
		return (
			<div className="datePicker">
				<input className="datePicker__input" type='text' onFocus={this.focusIn} value={this.state.selectedDate} readOnly/>
				{this.state.isCalendarShow === false ? null : this.calender()}
			</div>
		);
	}
});

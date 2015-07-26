/**
 * Created by sam on 7/23/15.
 */
import React from 'react';
import Calendar from './calendar';
import padLeft from 'lodash/string/padLeft';

export default React.createClass({
	getDefaultProps: function() {
		return {
			range: [2010, 2020]
		};
	},
	returnToday: function () {
		var today = new Date();
		var year = `${today.getFullYear()}`;
		var month = `${today.getMonth() + 1}`;
		var day = `${today.getDate()}`;

		if (month.length < 2) {
			month = `0${month}`;
		}
		month = padLeft(month, '0', 2);

		day = padLeft(day, '0', 2);

		today = `${year}-${month}-${day}`;
		return today;
	},
	getInitialState: function () {


		var today = this.returnToday();
		return {
			today: today,
			isCalendarShow: false
		};

	},
	onClickCalendar: function (date) {
		this.setState({
			today: date,
			isCalendarShow: false
		}, function() {
			this.props.onChange(date);
		});
	},
	selectToday: function () {
		var today = this.returnToday();

		this.setState({
			today: today,
			isCalendarShow: false
		});
	},
	calender: function () {
		return (
			<Calendar onClickCalendar={this.onClickCalendar} date={this.state.today} selectToday={this.selectToday} range={this.props.range}/>
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
				<input className="datePicker__input" type='text' onFocus={this.focusIn}
					   value={this.state.today} readOnly/>
				{this.state.isCalendarShow === false ? null : this.calender()}
			</div>
		);
	}
});

/**
 * Created by sam on 7/23/15.
 */
import React from 'react';
import Calendar from './calendar';
import getTodayMixin from './getTodayMixin';

export default React.createClass({
	mixins: [getTodayMixin],
	getDefaultProps: function () {
		return {
			disabled: false,
			range: [2010, 2020],
			locale: 'en',
			onChange: function (date) {
				// i will give you the date
			},
			value: ''
		};
	},
	propTypes: {
		disabled: React.PropTypes.bool,
		locale: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		range: React.PropTypes.arrayOf(React.PropTypes.number),
		value: React.PropTypes.string
	},
	getInitialState: function () {
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
		var today = this.getToday();

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

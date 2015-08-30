/**
 * @flow
 * Created by sam on 7/23/15.
 */
import React from 'react';
import Calendar from './calendar';
import getTodayMixin from './getTodayMixin';

export default React.createClass({
	mixins: [getTodayMixin],
	getDefaultProps: function ():Object {
		return {
			disabled: false,
			range: [2010, 2020],
			locale: 'en',
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
	getInitialState() {
		return {
			isCalendarShow: false
		}
	},
	componentDidMount() {
		document.addEventListener('click', this.documentClickHandler);
	},
	componentWillUnmount() {
		document.removeEventListener('click', this.documentClickHandler);
	},
	documentClickHandler() {
		this.setState({
			isCalendarShow: false
		})
	},
	onClickDatePickerArea(e:any) {

		// stop the click event
		e.nativeEvent.stopImmediatePropagation()
	},
	onClickCalendar: function (date:string) {
		this.setState({
			isCalendarShow: false
		})
		this.props.onChange(date);
	},
	selectToday: function () {
		this.setState({
			isCalendarShow: false
		})
		this.props.onChange(this.getToday());
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
		})
	},
	render: function ():any {
		return (
			<div className="datePicker" onClick={this.onClickDatePickerArea}>
				<input className={`datePicker__input ${this.props.disabled === true ? 'datePicker__input--disabled' : ''}`} type='text' onFocus={this.focusIn} value={this.props.value} readOnly disabled={this.props.disabled}/>
				{this.state.isCalendarShow === false ? null : this.calender()}
			</div>
		);
	}
});

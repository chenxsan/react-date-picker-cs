/**
 * @flow
 * Created by sam on 7/23/15.
 * 此页面的 month 为 1 基
 */
import React from 'react';
import SelectYear from './selectYear';
import SelectMonth from './selectMonth';
import WeekDays from './weekDays';
import getTodayMixin from './getTodayMixin';

export default React.createClass({
	mixins: [getTodayMixin],
	propTypes: {
		date: React.PropTypes.string,
		locale: React.PropTypes.string,
		onClickCalendar: React.PropTypes.func.isRequired,
		range: React.PropTypes.arrayOf(React.PropTypes.number),
		selectToday: React.PropTypes.func.isRequired
	},
    getInitialState: function ():Object {
        var date = new Date(this.props.date || this.getToday());
        var month = date.getMonth() + 1;

        return {
            year: date.getFullYear(), // {number}
            month: month, // {number}
            day: date.getDate()  // {number}
        };
    },
    prevMonth: function () {
			  var minYear = this.props.range[0];
				var maxYear = this.props.range[1];
        if (this.state.month === 1) {
            this.setState({
                month: 12,
                year: (this.state.year === minYear ? maxYear : this.state.year - 1)
            });
        } else {
					this.setState({
	            month: this.state.month - 1
	        });
				}
    },
    nextMonth: function () {
			  var minYear = this.props.range[0];
				var maxYear = this.props.range[1];
        if (this.state.month === 12) {
            this.setState({
                month: 1,
                year: (this.state.year === maxYear ? minYear : this.state.year + 1)
            });
        } else {
					this.setState({
	            month: this.state.month + 1
	        });
				}
    },
    mutateDate: function() {

        // 选择天的时候
				var month = String(this.state.month)
				month = month.length < 2 ? `0${month}` : `${month}`
				var day = String(this.state.day)
				day = day.length < 2 ? `0${day}` : `${day}`
        var date = `${this.state.year}-${month}-${day}`;
        this.props.onClickCalendar(date);
    },
    selectYear: function (year:number) {
        this.setState({
            year: year
        });
    },
    selectDay: function(day:number) {
        this.setState({
            day: day
        }, function() {
            this.mutateDate();
        });
    },
    selectMonth: function (month:number) {
        this.setState({
            month: month
        });
    },
    render: function ():any {
        return (<div className="datePicker__calendar">
            <div className="datePicker__calendar__header">
                <span onClick={this.prevMonth} className="datePicker__prev"></span>
                <SelectYear year={Number(this.state.year)} selectYear={this.selectYear} range={this.props.range}/>
                <SelectMonth month={Number(this.state.month)} selectMonth={this.selectMonth} locale={this.props.locale}/>
                <span onClick={this.nextMonth} className="datePicker__next"></span>
            </div>
            <WeekDays locale={this.props.locale} highlight={new Date(this.props.date).getFullYear() === this.state.year && new Date(this.props.date).getMonth() + 1 === this.state.month} year={Number(this.state.year)} month={Number(this.state.month)} day={Number(this.state.day)} selectDay={this.selectDay}/>
            <div className="datePicker__btnGroup"><button className="datePicker__btn datePicker__btn--today" onClick={this.props.selectToday}>{this.props.locale === 'zh' ? '今天' : 'Today'}</button></div>
        </div>);
    }

});

/**
 * Created by sam on 7/23/15.
 * 此页面的 month 为 1 基
 */
import React from 'react';
import padLeft from 'lodash/string/padLeft';
import SelectYear from './selectYear';
import SelectMonth from './selectMonth';
import WeekDays from './weekDays';

export default React.createClass({
	propTypes: {
		date: React.PropTypes.string,
		locale: React.PropTypes.string,
		onClickCalendar: React.PropTypes.func.isRequired,
		range: React.PropTypes.arrayOf(React.PropTypes.number),
		selectToday: React.PropTypes.func.isRequired
	},
    getInitialState: function () {
        var date = new Date(this.props.date || this.props.returnToday());
        var month = date.getMonth() + 1;

        return {
            year: date.getFullYear(), // {number}
            month: month, // {number}
            day: date.getDate()  // {number}
        };
    },
    prevMonth: function () {
        if (this.state.month === 1) {
            this.setState({
                month: 12,
                year: this.state.year - 1
            });
            return;
        }
        this.setState({
            month: this.state.month - 1
        });
    },
    nextMonth: function () {
        if (this.state.month === 12) {
            this.setState({
                month: 1,
                year: this.state.year + 1
            });
            return;
        }
        this.setState({
            month: this.state.month + 1
        });
    },
    mutateDate: function() {

        // 选择天的时候
        var date = `${this.state.year}-${padLeft(this.state.month, 2, '0')}-${padLeft(this.state.day, 2, '0')}`;
        this.props.onClickCalendar(date);
    },
    selectYear: function (year) {
        this.setState({
            year: +year
        });
    },
    selectDay: function(day) {
        this.setState({
            day: +day
        }, function() {
            this.mutateDate();
        });
    },
    selectMonth: function (month) {
        this.setState({
            month: +month
        });
    },
    render: function () {
        return (<div className="datePicker__calendar">
            <div className="datePicker__calendar__header">
                <span onClick={this.prevMonth} className="datePicker__prev"></span>
                <SelectYear year={this.state.year} selectYear={this.selectYear} range={this.props.range}/>
                <SelectMonth month={this.state.month} selectMonth={this.selectMonth} locale={this.props.locale}/>
                <span onClick={this.nextMonth} className="datePicker__next"></span>
            </div>
            <WeekDays locale={this.props.locale} highlight={new Date(this.props.date).getFullYear() === this.state.year && new Date(this.props.date).getMonth() + 1 === this.state.month} year={this.state.year} month={this.state.month} day={this.state.day} selectDay={this.selectDay}/>
            <div className="datePicker__btnGroup"><button className="datePicker__btn datePicker__btn--today" onClick={this.props.selectToday}>{this.props.locale === 'zh' ? '今天' : 'Today'}</button></div>
        </div>);
    }

});

export let __hotReload = true;

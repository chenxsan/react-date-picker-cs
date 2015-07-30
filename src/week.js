/**
 * Created by sam on 7/24/15.
 * 生成单行的星期
 */
import React from 'react';

export default React.createClass({
	propTypes: {
		day: React.PropTypes.number, // input 中的 day 值，
		days: React.PropTypes.array, // 要渲染的数组，正常长度为 7
		highlight: React.PropTypes.bool, // 表示要高亮特定的 yyyy-mm-dd 日期
		selectDay: React.PropTypes.func.isRequired
	},
    handleClick: function(e) {
        this.props.selectDay(e.target.textContent);
    },
    render: function() {
        var days = this.props.days.map(function(day, index) {
            if (day) {

                // 仅高亮今天
                if (day === this.props.day && this.props.highlight) {
                    return <td key={index} className={`datePicker__day--today datePicker__day`} onClick={this.handleClick}>{day}</td>;
                } else {
                    return <td key={index} className="datePicker__day" onClick={this.handleClick}>{day}</td>;
                }
            } else {
                return <td key={index} className={`datePicker__day--disabled datePicker__day`}></td>;
            }
        }, this);

        return (
            <tr>{days}</tr>
        );
    }
});

export let __hotReload = true;

/**
 * Created by sam on 7/24/15.
 * 生成单行的星期
 */
import React from 'react';

export default React.createClass({
	propTypes: {
		days: React.PropTypes.array,
		highlight: React.PropTypes.bool,
		range: React.PropTypes.arrayOf(React.PropTypes.number),
		selectDay: React.PropTypes.func.isRequired,
		year: React.PropTypes.number
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

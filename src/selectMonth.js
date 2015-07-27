/**
 * Created by sam on 7/23/15.
 */
import React from 'react';

export default React.createClass({
	propTypes: {
		locale: React.PropTypes.string,
		month: React.PropTypes.number,
		selectMonth: React.PropTypes.func.isRequired
	},
    getDefaultProps: function() {
        return {
            range: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        };
    },
    handleChange: function(e) {
      this.props.selectMonth(e.currentTarget.value);
    },
    render: function() {
		var months;
		if (this.props.locale === 'zh') {
			months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
		} else {
			months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		}
        var options = months.map(function(month, index) {
            return <option key={index} value={index + 1}>{`${month}`}</option>;
        });
        return (
            <select value={this.props.month} className="datePicker__month" onChange={this.handleChange}>
                {options}
            </select>
        );
    }
});

export let __hotReload = true;

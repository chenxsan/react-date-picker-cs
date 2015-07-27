/**
 * Created by sam on 7/23/15.
 */
import React from 'react';

export default React.createClass({
	propTypes: {
		month: React.PropTypes.number,
		range: React.PropTypes.arrayOf(React.PropTypes.string),
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
        var options = this.props.range.map(function(option, index) {
            return <option key={index} value={index + 1}>{`${option}`}</option>;
        });
        return (
            <select value={this.props.month} className="datePicker__month" onChange={this.handleChange}>
                {options}
            </select>
        );
    }
});

export let __hotReload = true;

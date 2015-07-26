/**
 * Created by sam on 7/23/15.
 */
import React from 'react';

export default React.createClass({
    getDefaultProps: function() {
        return {
            range: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
        };
    },
    handleChange: function(e) {
      this.props.selectMonth(e.currentTarget.value);
    },
    render: function() {
        var options = this.props.range.map(function(option, index) {
            return <option key={index} value={index}>{`${option}月`}</option>;
        });
        return (
            <select value={this.props.month} className="datePicker__month" onChange={this.handleChange}>
                {options}
            </select>
        );
    }
});

export let __hotReload = true;

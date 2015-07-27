/**
 * Created by sam on 7/23/15.
 */
import React from 'react';

export default React.createClass({
	propTypes: {
		range: React.PropTypes.arrayOf(React.PropTypes.number),
		selectYear: React.PropTypes.func.isRequired,
		year: React.PropTypes.number
	},
    getDefaultProps: function() {
      return {
          year: new Date().getFullYear()
      };
    },
    handleChange: function(e) {
        this.props.selectYear(e.currentTarget.value);
    },
    render: function() {
        var [start, end] = this.props.range;
        var options = [];
        for (var i = start, l = end; i <= l; i++) {
            options.push(i);
        }
        options = options.map(function(option) {
           return <option key={option} value={option}>{option}</option>;
        });
        return (
            <select value={this.props.year} className="datePicker__year" onChange={this.handleChange}>
                {options}
            </select>
        );
    }
});

export let __hotReload = true;

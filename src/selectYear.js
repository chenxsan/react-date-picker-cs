/**
 * @flow
 * Created by sam on 7/23/15.
 */
import React from 'react';

export default React.createClass({
	propTypes: {
		range: React.PropTypes.arrayOf(React.PropTypes.number),
		selectYear: React.PropTypes.func.isRequired,
		year: React.PropTypes.number
	},
    getDefaultProps: function():Object {
      return {
          year: new Date().getFullYear()
      };
    },
    handleChange: function(e:any) {
        this.props.selectYear(Number(e.currentTarget.value));
    },
    render: function():any {
				var start = typeof this.props.range === 'undefined' ? 1984 : this.props.range[0];
				var end = typeof this.props.range === 'undefined' ? 2046 : this.props.range[1];
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

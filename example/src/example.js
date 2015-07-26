var React = require('react');
var ReactDatePicker = require('react-date-picker-cs');

var App = React.createClass({
	log: function(date) {
		
	},
	render () {
		return (
			<div>
				<ReactDatePicker onChange={this.log} range={[2013, 2020]}/>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));

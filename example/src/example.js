var React = require('react');
var ReactDatePicker = require('react-date-picker-cs');

var App = React.createClass({
	getInitialState: function() {
		return {
			value: ''
		};
	},
	log: function(date) {
		this.setState({
			value: date
		});
	},
	render () {
		return (
			<div>
				<ReactDatePicker {...this.state} onChange={this.log}/>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));

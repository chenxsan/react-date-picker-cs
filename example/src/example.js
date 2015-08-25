var React = require('react');
var ReactDatePicker = require('react-date-picker-cs');

var App = React.createClass({
	getInitialState: function() {
		return {
			selectedDate: ''
		};
	},
	log: function(date) {
		this.setState({
			selectedDate: date
		});
	},
	render () {
		return (
			<div>
				<ReactDatePicker onChange={this.log} range={[2013, 2020]} value={this.state.selectedDate}/>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));

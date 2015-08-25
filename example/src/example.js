var React = require('react');
var ReactDatePicker = require('react-date-picker-cs');

var App = React.createClass({
	getInitialState: function() {
		return {
			value: '',
			isCalendarShow: false
		};
	},
	log: function(date) {
		this.setState({
			value: date,
			isCalendarShow: false
		});
	},
	onFocusInCalendar() {
		this.setState({
			isCalendarShow: true
		})
	},
	render () {
		return (
			<div>
				<ReactDatePicker {...this.state} onChange={this.log} onFocusIn={this.onFocusInCalendar}/>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));

require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactDatePicker = require('react-date-picker-cs');

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			value: ''
		};
	},
	log: function log(date) {
		this.setState({
			value: date
		});
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(ReactDatePicker, _extends({}, this.state, { onChange: this.log }))
		);
	}
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-date-picker-cs":undefined}]},{},[1]);

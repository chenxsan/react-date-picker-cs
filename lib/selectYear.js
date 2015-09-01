/**
 * 
 * Created by sam on 7/23/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createClass({
    displayName: 'selectYear',

    propTypes: {
        range: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number),
        selectYear: _react2['default'].PropTypes.func.isRequired,
        year: _react2['default'].PropTypes.number
    },
    getDefaultProps: function getDefaultProps() {
        return {
            year: new Date().getFullYear()
        };
    },
    handleChange: function handleChange(e) {
        this.props.selectYear(Number(e.currentTarget.value));
    },
    render: function render() {
        var start = typeof this.props.range === 'undefined' ? 1984 : this.props.range[0];
        var end = typeof this.props.range === 'undefined' ? 2046 : this.props.range[1];
        var options = [];
        for (var i = start, l = end; i <= l; i++) {
            options.push(i);
        }
        options = options.map(function (option) {
            return _react2['default'].createElement(
                'option',
                { key: option, value: option },
                option
            );
        });
        return _react2['default'].createElement(
            'select',
            { value: this.props.year, className: "datePicker__year", onChange: this.handleChange },
            options
        );
    }
});
module.exports = exports['default'];
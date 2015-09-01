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
    displayName: 'selectMonth',

    propTypes: {
        locale: _react2['default'].PropTypes.string,
        month: _react2['default'].PropTypes.number,
        selectMonth: _react2['default'].PropTypes.func.isRequired
    },
    getDefaultProps: function getDefaultProps() {
        return {
            range: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        };
    },
    handleChange: function handleChange(e) {
        this.props.selectMonth(Number(e.currentTarget.value));
    },
    render: function render() {
        var months;
        if (this.props.locale === 'zh') {
            months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
        } else {
            months = ['January', 'February', 'March', ' April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        }
        var options = months.map(function (month, index) {
            return _react2['default'].createElement(
                'option',
                { key: index, value: index + 1 },
                '' + month
            );
        });
        return _react2['default'].createElement(
            'select',
            { value: this.props.month, className: "datePicker__month", onChange: this.handleChange },
            options
        );
    }
});
module.exports = exports['default'];
/**
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

    getDefaultProps: function getDefaultProps() {
        return {
            range: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
        };
    },
    handleChange: function handleChange(e) {
        this.props.selectMonth(e.currentTarget.value);
    },
    render: function render() {
        var options = this.props.range.map(function (option, index) {
            return _react2['default'].createElement(
                'option',
                { key: index, value: index },
                option + '月'
            );
        });
        return _react2['default'].createElement(
            'select',
            { value: this.props.month, className: "datePicker__month", onChange: this.handleChange },
            options
        );
    }
});
var __hotReload = true;
exports.__hotReload = __hotReload;
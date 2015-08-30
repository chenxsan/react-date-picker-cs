/**
 * 
 * Created by sam on 7/24/15.
 * 生成单行的星期
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createClass({
    displayName: 'week',

    propTypes: {
        day: _react2['default'].PropTypes.number, // input 中的 day 值，
        days: _react2['default'].PropTypes.array.isRequired, // 要渲染的数组，正常长度为 7
        highlight: _react2['default'].PropTypes.bool, // 表示要高亮特定的 yyyy-mm-dd 日期
        selectDay: _react2['default'].PropTypes.func.isRequired
    },
    handleClick: function handleClick(e) {
        this.props.selectDay(e.target.textContent);
    },
    render: function render() {
        var days = (typeof this.props.days === 'undefined' ? [] : this.props.days).map(function (day, index) {
            if (day) {

                // 仅高亮今天
                if (day === this.props.day && this.props.highlight) {
                    return _react2['default'].createElement(
                        'td',
                        { key: index, className: 'datePicker__day--today datePicker__day', onClick: this.handleClick },
                        day
                    );
                } else {
                    return _react2['default'].createElement(
                        'td',
                        { key: index, className: "datePicker__day", onClick: this.handleClick },
                        day
                    );
                }
            } else {
                return _react2['default'].createElement('td', { key: index, className: 'datePicker__day--disabled datePicker__day' });
            }
        }, this);

        return _react2['default'].createElement(
            'tr',
            null,
            days
        );
    }
});
module.exports = exports['default'];
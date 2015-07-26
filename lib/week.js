/**
 * Created by sam on 7/24/15.
 * 生成单行的星期
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports["default"] = _react2["default"].createClass({
    displayName: "week",

    handleClick: function handleClick(e) {
        this.props.selectDay(e.target.textContent);
    },
    render: function render() {
        var days = this.props.days.map(function (day, index) {
            if (day) {

                // 仅高亮今天
                if (day == this.props.day && this.props.highlight) {
                    return _react2["default"].createElement(
                        "td",
                        { key: index, className: "datePicker__day--today datePicker__day", onClick: this.handleClick },
                        day
                    );
                } else {
                    return _react2["default"].createElement(
                        "td",
                        { key: index, className: "datePicker__day", onClick: this.handleClick },
                        day
                    );
                }
            } else {
                return _react2["default"].createElement("td", { key: index, className: "datePicker__day--disabled datePicker__day" });
            }
        }, this);

        return _react2["default"].createElement(
            "tr",
            null,
            days
        );
    }
});
var __hotReload = true;
exports.__hotReload = __hotReload;
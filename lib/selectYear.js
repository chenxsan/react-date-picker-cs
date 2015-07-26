/**
 * Created by sam on 7/23/15.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports["default"] = _react2["default"].createClass({
    displayName: "selectYear",

    getDefaultProps: function getDefaultProps() {
        return {
            year: 2015
        };
    },
    handleChange: function handleChange(e) {
        this.props.selectYear(e.currentTarget.value);
    },
    render: function render() {
        var _props$range = _slicedToArray(this.props.range, 2);

        var start = _props$range[0];
        var end = _props$range[1];

        var options = [];
        for (var i = start, l = end; i <= l; i++) {
            options.push(i);
        }
        options = options.map(function (option) {
            return _react2["default"].createElement(
                "option",
                { key: option, value: option },
                option
            );
        });
        return _react2["default"].createElement(
            "select",
            { value: this.props.year, className: "datePicker__year", onChange: this.handleChange },
            options
        );
    }
});
var __hotReload = true;
exports.__hotReload = __hotReload;
/**
 * Created by sam on 7/24/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodashUtilityRange = require('lodash/utility/range');

var _lodashUtilityRange2 = _interopRequireDefault(_lodashUtilityRange);

var _lodashArrayChunk = require('lodash/array/chunk');

var _lodashArrayChunk2 = _interopRequireDefault(_lodashArrayChunk);

var _week = require('./week');

var _week2 = _interopRequireDefault(_week);

exports['default'] = _react2['default'].createClass({
    displayName: 'weekDays',

    selectDay: function selectDay(val) {
        this.props.selectDay(val);
    },
    render: function render() {

        // 计算某年某月总共的天数
        var days = new Date(this.props.year, this.props.month + 1, 0).getDate();

        // 该月第一天是周几，0 是周天，1 是周一
        var firstDay = new Date(this.props.year, this.props.month, 1).getDay();

        var range = (0, _lodashUtilityRange2['default'])(1, days + 1); // lodash 的 range 并不包括 end 值

        for (var i = 0, l = firstDay; i < l; i++) {
            range.unshift(undefined);
        }

        var chunks = (0, _lodashArrayChunk2['default'])(range, 7); // 分割成长度为 7 的数组段

        var weekDays = [];
        for (var j = 0, len = chunks.length; j < len; j++) {
            weekDays.push(_react2['default'].createElement(_week2['default'], { key: j, highlight: this.props.highlight, year: this.props.year, month: this.props.month, days: chunks[j], selectDay: this.selectDay, day: this.props.day }));
        }

        return _react2['default'].createElement(
            'table',
            null,
            _react2['default'].createElement(
                'thead',
                null,
                _react2['default'].createElement(
                    'tr',
                    null,
                    _react2['default'].createElement(
                        'th',
                        null,
                        '日'
                    ),
                    _react2['default'].createElement(
                        'th',
                        null,
                        '一'
                    ),
                    _react2['default'].createElement(
                        'th',
                        null,
                        '二'
                    ),
                    _react2['default'].createElement(
                        'th',
                        null,
                        '三'
                    ),
                    _react2['default'].createElement(
                        'th',
                        null,
                        '四'
                    ),
                    _react2['default'].createElement(
                        'th',
                        null,
                        '五'
                    ),
                    _react2['default'].createElement(
                        'th',
                        null,
                        '六'
                    )
                )
            ),
            _react2['default'].createElement(
                'tbody',
                null,
                weekDays
            )
        );
    }
});
var __hotReload = true;
exports.__hotReload = __hotReload;
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactDatePicker = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/**
 * 
 * Created by sam on 7/23/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _calendar = require('./calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _getTodayMixin = require('./getTodayMixin');

var _getTodayMixin2 = _interopRequireDefault(_getTodayMixin);

exports['default'] = _react2['default'].createClass({
	displayName: 'ReactDatePicker',

	mixins: [_getTodayMixin2['default']],
	getDefaultProps: function getDefaultProps() {
		return {
			disabled: false,
			range: [2010, 2020],
			locale: 'en',
			value: ''
		};
	},
	propTypes: {
		disabled: _react2['default'].PropTypes.bool,
		locale: _react2['default'].PropTypes.string,
		onChange: _react2['default'].PropTypes.func.isRequired,
		range: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number),
		value: _react2['default'].PropTypes.string
	},
	getInitialState: function getInitialState() {
		return {
			isCalendarShow: false
		};
	},
	componentDidMount: function componentDidMount() {
		document.addEventListener('click', this.documentClickHandler);
	},
	componentWillUnmount: function componentWillUnmount() {
		document.removeEventListener('click', this.documentClickHandler);
	},
	documentClickHandler: function documentClickHandler() {
		this.setState({
			isCalendarShow: false
		});
	},
	onClickDatePickerArea: function onClickDatePickerArea(e) {

		// stop the click event
		e.nativeEvent.stopImmediatePropagation();
	},
	onClickCalendar: function onClickCalendar(date) {
		this.setState({
			isCalendarShow: false
		});
		this.props.onChange(date);
	},
	selectToday: function selectToday() {
		this.setState({
			isCalendarShow: false
		});
		this.props.onChange(this.getToday());
	},
	calender: function calender() {
		return _react2['default'].createElement(_calendar2['default'], { onClickCalendar: this.onClickCalendar, date: this.props.value, selectToday: this.selectToday, range: this.props.range, locale: this.props.locale });
	},
	focusIn: function focusIn() {
		if (this.props.disabled === true) {
			return;
		}
		this.setState({
			isCalendarShow: true
		});
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: "datePicker", onClick: this.onClickDatePickerArea },
			_react2['default'].createElement('input', { className: 'datePicker__input ' + (this.props.disabled === true ? 'datePicker__input--disabled' : ''), type: 'text', onFocus: this.focusIn, value: this.props.value, readOnly: true, disabled: this.props.disabled }),
			this.state.isCalendarShow === false ? null : this.calender()
		);
	}
});
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./calendar":2,"./getTodayMixin":3}],2:[function(require,module,exports){
(function (global){
/**
 * 
 * Created by sam on 7/23/15.
 * 此页面的 month 为 1 基
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _selectYear = require('./selectYear');

var _selectYear2 = _interopRequireDefault(_selectYear);

var _selectMonth = require('./selectMonth');

var _selectMonth2 = _interopRequireDefault(_selectMonth);

var _weekDays = require('./weekDays');

var _weekDays2 = _interopRequireDefault(_weekDays);

var _getTodayMixin = require('./getTodayMixin');

var _getTodayMixin2 = _interopRequireDefault(_getTodayMixin);

exports['default'] = _react2['default'].createClass({
    displayName: 'calendar',

    mixins: [_getTodayMixin2['default']],
    propTypes: {
        date: _react2['default'].PropTypes.string,
        locale: _react2['default'].PropTypes.string,
        onClickCalendar: _react2['default'].PropTypes.func.isRequired,
        range: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number),
        selectToday: _react2['default'].PropTypes.func.isRequired
    },
    getInitialState: function getInitialState() {
        var date = new Date(this.props.date || this.getToday());
        var month = date.getMonth() + 1;

        return {
            year: date.getFullYear(), // {number}
            month: month, // {number}
            day: date.getDate() // {number}
        };
    },
    prevMonth: function prevMonth() {
        var minYear = this.props.range[0];
        var maxYear = this.props.range[1];
        if (this.state.month === 1) {
            this.setState({
                month: 12,
                year: this.state.year === minYear ? maxYear : this.state.year - 1
            });
        } else {
            this.setState({
                month: this.state.month - 1
            });
        }
    },
    nextMonth: function nextMonth() {
        var minYear = this.props.range[0];
        var maxYear = this.props.range[1];
        if (this.state.month === 12) {
            this.setState({
                month: 1,
                year: this.state.year === maxYear ? minYear : this.state.year + 1
            });
        } else {
            this.setState({
                month: this.state.month + 1
            });
        }
    },
    mutateDate: function mutateDate() {

        // 选择天的时候
        var month = String(this.state.month);
        month = month.length < 2 ? '0' + month : '' + month;
        var day = String(this.state.day);
        day = day.length < 2 ? '0' + day : '' + day;
        var date = this.state.year + '-' + month + '-' + day;
        this.props.onClickCalendar(date);
    },
    selectYear: function selectYear(year) {
        this.setState({
            year: year
        });
    },
    selectDay: function selectDay(day) {
        this.setState({
            day: day
        }, function () {
            this.mutateDate();
        });
    },
    selectMonth: function selectMonth(month) {
        this.setState({
            month: month
        });
    },
    render: function render() {
        return _react2['default'].createElement(
            'div',
            { className: "datePicker__calendar" },
            _react2['default'].createElement(
                'div',
                { className: "datePicker__calendar__header" },
                _react2['default'].createElement('span', { onClick: this.prevMonth, className: "datePicker__prev" }),
                _react2['default'].createElement(_selectYear2['default'], { year: Number(this.state.year), selectYear: this.selectYear, range: this.props.range }),
                _react2['default'].createElement(_selectMonth2['default'], { month: Number(this.state.month), selectMonth: this.selectMonth, locale: this.props.locale }),
                _react2['default'].createElement('span', { onClick: this.nextMonth, className: "datePicker__next" })
            ),
            _react2['default'].createElement(_weekDays2['default'], { locale: this.props.locale, highlight: new Date(this.props.date).getFullYear() === this.state.year && new Date(this.props.date).getMonth() + 1 === this.state.month, year: Number(this.state.year), month: Number(this.state.month), day: Number(this.state.day), selectDay: this.selectDay }),
            _react2['default'].createElement(
                'div',
                { className: "datePicker__btnGroup" },
                _react2['default'].createElement(
                    'button',
                    { className: "datePicker__btn datePicker__btn--today", onClick: this.props.selectToday },
                    this.props.locale === 'zh' ? '今天' : 'Today'
                )
            )
        );
    }

});
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./getTodayMixin":3,"./selectMonth":4,"./selectYear":5,"./weekDays":7}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports["default"] = {
		getToday: function getToday() {
				var today = new Date();
				var year = "" + today.getFullYear();
				var month = "" + (today.getMonth() + 1); // 0 基，但是显示时不可能也 0 基
				var day = "" + today.getDate();
				month = month.length < 2 ? "0" + month : month;
				day = day.length < 2 ? "0" + day : day;
				return year + "-" + month + "-" + day;
		}
};
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
(function (global){
/**
 * 
 * Created by sam on 7/23/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
(function (global){
/**
 * 
 * Created by sam on 7/23/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],6:[function(require,module,exports){
(function (global){
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

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
(function (global){
/**
 * 
 * Created by sam on 7/24/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _week = require('./week');

var _week2 = _interopRequireDefault(_week);

exports['default'] = _react2['default'].createClass({
	displayName: 'weekDays',

	propTypes: {
		day: _react2['default'].PropTypes.number.isRequired,
		highlight: _react2['default'].PropTypes.bool,
		locale: _react2['default'].PropTypes.string,
		month: _react2['default'].PropTypes.number.isRequired,
		range: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number),
		selectDay: _react2['default'].PropTypes.func.isRequired,
		year: _react2['default'].PropTypes.number.isRequired
	},
	selectDay: function selectDay(val) {
		this.props.selectDay(val);
	},
	render: function render() {

		// 计算某年某月总共的天数
		var days = new Date(this.props.year, this.props.month, 0).getDate(); // 8 月 0 号即 7 月最后一天

		// 该月第一天是周几，0 是周天，1 是周一
		var firstDay = new Date(this.props.year, this.props.month - 1, 1).getDay();

		var range = [].concat(_toConsumableArray(Array(days))).map(function (_, i) {
			return i + 1;
		});

		for (var i = 0, l = firstDay; i < l; i++) {
			range.unshift(undefined);
		}

		var chunks = []; // 分割成长度为 7 的数组段

		while (range.length > 0) {
			chunks.push(range.splice(0, 7));
		}

		var weekDays = [];
		for (var j = 0, len = chunks.length; j < len; j++) {
			// 如果 chunks[j] 长度不足 7，则补充到 7
			if (chunks[j].length < 7) {
				for (var m = chunks[j].length, n = 7; m < n; m++) {
					chunks[j].push(undefined);
				}
			}
			weekDays.push(_react2['default'].createElement(_week2['default'], { key: j, highlight: this.props.highlight, days: chunks[j], selectDay: this.selectDay, day: Number(this.props.day) }));
		}
		var weekTitle;
		if (this.props.locale === 'zh') {
			weekTitle = ['日', '一', '二', '三', '四', '五', '六'].map(function (v) {
				return _react2['default'].createElement(
					'th',
					{ key: v },
					v
				);
			});
		} else {
			weekTitle = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(function (v) {
				return _react2['default'].createElement(
					'th',
					{ key: v },
					v
				);
			});
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
					weekTitle
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
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./week":6}]},{},[1])(1)
});
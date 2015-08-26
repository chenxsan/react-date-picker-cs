(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactDatePicker = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var baseSlice = require('../internal/baseSlice'),
    isIterateeCall = require('../internal/isIterateeCall');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeFloor = Math.floor,
    nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `collection` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
 * @returns {Array} Returns the new array containing chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if (guard ? isIterateeCall(array, size, guard) : size == null) {
    size = 1;
  } else {
    size = nativeMax(nativeFloor(size) || 1, 1);
  }
  var index = 0,
      length = array ? array.length : 0,
      resIndex = -1,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[++resIndex] = baseSlice(array, index, (index += size));
  }
  return result;
}

module.exports = chunk;

},{"../internal/baseSlice":3,"../internal/isIterateeCall":7}],2:[function(require,module,exports){
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

},{}],3:[function(require,module,exports){
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  start = start == null ? 0 : (+start || 0);
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = (end === undefined || end > length) ? length : (+end || 0);
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;

},{}],4:[function(require,module,exports){
var baseProperty = require('./baseProperty');

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

module.exports = getLength;

},{"./baseProperty":2}],5:[function(require,module,exports){
var getLength = require('./getLength'),
    isLength = require('./isLength');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

module.exports = isArrayLike;

},{"./getLength":4,"./isLength":8}],6:[function(require,module,exports){
/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

},{}],7:[function(require,module,exports){
var isArrayLike = require('./isArrayLike'),
    isIndex = require('./isIndex'),
    isObject = require('../lang/isObject');

/**
 * Checks if the provided arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
      ? (isArrayLike(object) && isIndex(index, object.length))
      : (type == 'string' && index in object)) {
    var other = object[index];
    return value === value ? (value === other) : (other !== other);
  }
  return false;
}

module.exports = isIterateeCall;

},{"../lang/isObject":9,"./isArrayLike":5,"./isIndex":6}],8:[function(require,module,exports){
/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],9:[function(require,module,exports){
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],10:[function(require,module,exports){
var isIterateeCall = require('../internal/isIterateeCall');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. If `end` is not specified it is
 * set to `start` with `start` then set to `0`. If `end` is less than `start`
 * a zero-length range is created unless a negative `step` is specified.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the new array of numbers.
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
function range(start, end, step) {
  if (step && isIterateeCall(start, end, step)) {
    end = step = undefined;
  }
  start = +start || 0;
  step = step == null ? 1 : (+step || 0);

  if (end == null) {
    end = start;
    start = 0;
  } else {
    end = +end || 0;
  }
  // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
  // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (++index < length) {
    result[index] = start;
    start += step;
  }
  return result;
}

module.exports = range;

},{"../internal/isIterateeCall":7}],11:[function(require,module,exports){
(function (global){
/**
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
},{"./calendar":12,"./getTodayMixin":13}],12:[function(require,module,exports){
(function (global){
/**
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
        if (this.state.month === 1) {
            this.setState({
                month: 12,
                year: this.state.year - 1
            });
            return;
        }
        this.setState({
            month: this.state.month - 1
        });
    },
    nextMonth: function nextMonth() {
        if (this.state.month === 12) {
            this.setState({
                month: 1,
                year: this.state.year + 1
            });
            return;
        }
        this.setState({
            month: this.state.month + 1
        });
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
            year: +year
        });
    },
    selectDay: function selectDay(day) {
        this.setState({
            day: +day
        }, function () {
            this.mutateDate();
        });
    },
    selectMonth: function selectMonth(month) {
        this.setState({
            month: +month
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
                _react2['default'].createElement(_selectYear2['default'], { year: this.state.year, selectYear: this.selectYear, range: this.props.range }),
                _react2['default'].createElement(_selectMonth2['default'], { month: this.state.month, selectMonth: this.selectMonth, locale: this.props.locale }),
                _react2['default'].createElement('span', { onClick: this.nextMonth, className: "datePicker__next" })
            ),
            _react2['default'].createElement(_weekDays2['default'], { locale: this.props.locale, highlight: new Date(this.props.date).getFullYear() === this.state.year && new Date(this.props.date).getMonth() + 1 === this.state.month, year: this.state.year, month: this.state.month, day: this.state.day, selectDay: this.selectDay }),
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
var __hotReload = true;
exports.__hotReload = __hotReload;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./getTodayMixin":13,"./selectMonth":14,"./selectYear":15,"./weekDays":17}],13:[function(require,module,exports){
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
				today = year + "-" + month + "-" + day;
				return today;
		}
};
module.exports = exports["default"];

},{}],14:[function(require,module,exports){
(function (global){
/**
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
        this.props.selectMonth(e.currentTarget.value);
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
var __hotReload = true;
exports.__hotReload = __hotReload;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],15:[function(require,module,exports){
(function (global){
/**
 * Created by sam on 7/23/15.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

exports["default"] = _react2["default"].createClass({
    displayName: "selectYear",

    propTypes: {
        range: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.number),
        selectYear: _react2["default"].PropTypes.func.isRequired,
        year: _react2["default"].PropTypes.number
    },
    getDefaultProps: function getDefaultProps() {
        return {
            year: new Date().getFullYear()
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],16:[function(require,module,exports){
(function (global){
/**
 * Created by sam on 7/24/15.
 * 生成单行的星期
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

exports["default"] = _react2["default"].createClass({
    displayName: "week",

    propTypes: {
        day: _react2["default"].PropTypes.number, // input 中的 day 值，
        days: _react2["default"].PropTypes.array, // 要渲染的数组，正常长度为 7
        highlight: _react2["default"].PropTypes.bool, // 表示要高亮特定的 yyyy-mm-dd 日期
        selectDay: _react2["default"].PropTypes.func.isRequired
    },
    handleClick: function handleClick(e) {
        this.props.selectDay(e.target.textContent);
    },
    render: function render() {
        var days = this.props.days.map(function (day, index) {
            if (day) {

                // 仅高亮今天
                if (day === this.props.day && this.props.highlight) {
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],17:[function(require,module,exports){
(function (global){
/**
 * Created by sam on 7/24/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _lodashUtilityRange = require('lodash/utility/range');

var _lodashUtilityRange2 = _interopRequireDefault(_lodashUtilityRange);

var _lodashArrayChunk = require('lodash/array/chunk');

var _lodashArrayChunk2 = _interopRequireDefault(_lodashArrayChunk);

var _week = require('./week');

var _week2 = _interopRequireDefault(_week);

exports['default'] = _react2['default'].createClass({
	displayName: 'weekDays',

	propTypes: {
		day: _react2['default'].PropTypes.number,
		highlight: _react2['default'].PropTypes.bool,
		locale: _react2['default'].PropTypes.string,
		month: _react2['default'].PropTypes.number,
		range: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.number),
		selectDay: _react2['default'].PropTypes.func.isRequired,
		year: _react2['default'].PropTypes.number
	},
	selectDay: function selectDay(val) {
		this.props.selectDay(val);
	},
	render: function render() {

		// 计算某年某月总共的天数
		var days = new Date(this.props.year, this.props.month, 0).getDate(); // 8 月 0 号即 7 月最后一天

		// 该月第一天是周几，0 是周天，1 是周一
		var firstDay = new Date(this.props.year, this.props.month - 1, 1).getDay();

		var range = (0, _lodashUtilityRange2['default'])(1, days + 1); // lodash 的 range 并不包括 end 值

		for (var i = 0, l = firstDay; i < l; i++) {
			range.unshift(undefined);
		}

		var chunks = (0, _lodashArrayChunk2['default'])(range, 7); // 分割成长度为 7 的数组段

		var weekDays = [];
		for (var j = 0, len = chunks.length; j < len; j++) {
			// 如果 chunks[j] 长度不足 7，则补充到 7
			if (chunks[j].length < 7) {
				for (var m = chunks[j].length, n = 7; m < n; m++) {
					chunks[j].push(undefined);
				}
			}
			weekDays.push(_react2['default'].createElement(_week2['default'], { key: j, highlight: this.props.highlight, days: chunks[j], selectDay: this.selectDay, day: this.props.day }));
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
var __hotReload = true;
exports.__hotReload = __hotReload;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./week":16,"lodash/array/chunk":1,"lodash/utility/range":10}]},{},[11])(11)
});
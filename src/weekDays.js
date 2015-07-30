/**
 * Created by sam on 7/24/15.
 */
import React from 'react';
import _range from 'lodash/utility/range';
import _chunk from 'lodash/array/chunk';
import Week from './week';

export default React.createClass({
	propTypes: {
		day: React.PropTypes.number,
		highlight: React.PropTypes.bool,
		locale: React.PropTypes.string,
		month: React.PropTypes.number,
		range: React.PropTypes.arrayOf(React.PropTypes.number),
		selectDay: React.PropTypes.func.isRequired,
		year: React.PropTypes.number
	},
	selectDay: function (val) {
		this.props.selectDay(val);
	},
	render: function () {

		// 计算某年某月总共的天数
		var days = new Date(this.props.year, this.props.month, 0).getDate(); // 8 月 0 号即 7 月最后一天

		// 该月第一天是周几，0 是周天，1 是周一
		var firstDay = new Date(this.props.year, this.props.month - 1, 1).getDay();

		var range = _range(1, days + 1); // lodash 的 range 并不包括 end 值

		for (var i = 0, l = firstDay; i < l; i++) {
			range.unshift(undefined);
		}

		var chunks = _chunk(range, 7); // 分割成长度为 7 的数组段

		var weekDays = [];
		for (let j = 0, len = chunks.length; j < len; j++) {
			// 如果 chunks[j] 长度不足 7，则补充到 7
			if (chunks[j].length < 7) {
				for (let m = chunks[j].length, n = 7; m < n; m++) {
					chunks[j].push(undefined);
				}
			}
			weekDays.push(<Week key={j} highlight={this.props.highlight} days={chunks[j]} selectDay={this.selectDay} day={this.props.day}/>);
		}
		var weekTitle;
		if (this.props.locale === 'zh') {
			weekTitle = ['日', '一', '二', '三', '四', '五', '六'].map(function (v) {
				return (<th key={v}>{v}</th>);
			});
		} else {
			weekTitle = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(function (v) {
				return (<th key={v}>{v}</th>);
			});
		}

		return (
			<table>
				<thead>
				<tr>
					{weekTitle}
				</tr>
				</thead>
				<tbody>
				{weekDays}
				</tbody>
			</table>
		);
	}
});

export let __hotReload = true;

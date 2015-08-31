/**
 * @flow
 * Created by sam on 7/24/15.
 */
import React from 'react';
import Week from './week';

export default React.createClass({
	propTypes: {
		day: React.PropTypes.number.isRequired,
		highlight: React.PropTypes.bool,
		locale: React.PropTypes.string,
		month: React.PropTypes.number.isRequired,
		range: React.PropTypes.arrayOf(React.PropTypes.number),
		selectDay: React.PropTypes.func.isRequired,
		year: React.PropTypes.number.isRequired
	},
	selectDay: function (val:string) {
		this.props.selectDay(val);
	},
	render: function ():any {

		// 计算某年某月总共的天数
		var days = new Date(this.props.year, this.props.month, 0).getDate(); // 8 月 0 号即 7 月最后一天

		// 该月第一天是周几，0 是周天，1 是周一
		var firstDay = new Date(this.props.year, this.props.month - 1, 1).getDay();

		var range = [...Array(days)].map((_, i) => i + 1);

		for (var i = 0, l = firstDay; i < l; i++) {
			range.unshift(undefined);
		}

		var chunks = []; // 分割成长度为 7 的数组段

		while (range.length > 0) {
			chunks.push(range.splice(0, 7))
		}

		var weekDays = [];
		for (var j = 0, len = chunks.length; j < len; j++) {
			// 如果 chunks[j] 长度不足 7，则补充到 7
			if (chunks[j].length < 7) {
				for (var m = chunks[j].length, n = 7; m < n; m++) {
					chunks[j].push(undefined);
				}
			}
			weekDays.push(<Week key={j} highlight={this.props.highlight} days={chunks[j]} selectDay={this.selectDay} day={Number(this.props.day)}/>);
		}
		var weekTitle;
		if (this.props.locale === 'zh') {
			weekTitle = ['日', '一', '二', '三', '四', '五', '六'].map(function (v) {
				return (<th key={v}>{v}</th>);
			});
		} else {
			weekTitle = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(function (v) {
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

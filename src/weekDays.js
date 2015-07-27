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
		month: React.PropTypes.number,
		range: React.PropTypes.arrayOf(React.PropTypes.number),
		selectDay: React.PropTypes.func.isRequired,
		year: React.PropTypes.number
	},
    selectDay: function(val) {
        this.props.selectDay(val);
    },
   render: function() {

       // 计算某年某月总共的天数
       var days = new Date(this.props.year, this.props.month - 1, 0).getDate(); // month 是 0 基，所以又得减一

       // 该月第一天是周几，0 是周天，1 是周一
       var firstDay = new Date(this.props.year, this.props.month - 1, 1).getDay();

       var range = _range(1, days + 1); // lodash 的 range 并不包括 end 值

       for (var i = 0, l = firstDay; i < l; i++) {
           range.unshift(undefined);
       }

       var chunks = _chunk(range, 7); // 分割成长度为 7 的数组段

       var weekDays = [];
       for (var j = 0, len = chunks.length; j < len; j++) {
           weekDays.push(<Week key={j} highlight={this.props.highlight} year={this.props.year} month={this.props.month} days={chunks[j]} selectDay={this.selectDay} day={this.props.day}/>);
       }

     return (
         <table>
             <thead>
             <tr>
                 <th>日</th>
                 <th>一</th>
                 <th>二</th>
                 <th>三</th>
                 <th>四</th>
                 <th>五</th>
                 <th>六</th>
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

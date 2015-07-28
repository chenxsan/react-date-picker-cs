# React DatePicker

React 日期组件。

## Demo

Demo 请点击： [chenxsan.github.io/react-date-picker-cs](http://chenxsan.github.io/react-date-picker-cs/)

## 安装

最简单的办法是从 NPM 上安装，

```
npm install react-date-picker-cs --save
```

如果你使用 [jspm](https://github.com/jspm/jspm-cli)：

```
jspm install npm:react-date-picker-cs
```

当然，你也可以直接在页面中引用 `dist/react-date-picker-cs.js` 及 `dist/ReactDatePicker.css`。

## 用法

```
var React = require('react');
var ReactDatePicker = require('react-date-picker-cs');

var App = React.createClass({
	getInitialState: function() {
		return {
			selectedDate: '2015-07-20'
		};
	},
	log: function(date) {
		this.setState({
			selectedDate: date
		});
	},
	render () {
		return (
			<div>
				<ReactDatePicker onChange={this.log} range={[2013, 2020]} value={this.state.selectedDate}/>
			</div>
		);
	}
});

React.render(<App />, document.getElementById('app'));
```

### 组件属性

* range {Array} 定义年份的范围
* onChange {Function} 日期变化的回调函数，函数参数为用户所选的日期
* locale {String} 默认为 `zh`，但也可以传入 `en`

### 修改样式

样式定义在 `ReactDatePicker.less` 文件中，采用 BEM 命名规范。

### 浏览器兼容情况

目前仅在 Mac 平台下最新版的 Firefox、Chrome 与 Safari 里测试过。

## 定制

如果你想在此基础上自定义或改造功能，组件的源代码在 `src` 目录下。

更多开发流程参见 [JedWatson/generator-react-component](https://github.com/JedWatson/generator-react-component)，因为本组件是基于它的样板开发的。

## License

MIT. Copyright (c) 2015 Sam Chen.


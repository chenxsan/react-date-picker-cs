# React DatePicker

又一个 React 日期选择组件。可以定义年份的范围，比如：

```
<ReactDatePicker range={[1990, 2010]} />
```

日期本身可以通过 `onChange` 事件取得：

```
function log(date) {
  console.log(date);
}
<ReactDatePicker onChange={log} />
```

## Demo

Demo 请点击： [chenxsan.github.io/react-date-picker-cs](http://chenxsan.github.io/react-date-picker-cs/)

## 安装

最简单的办法是从 NPM 上安装，

```
npm install react-date-picker-cs --save
```

然后在 Browserify、Webpack、jspm 等构建工具中使用。

当然，也可以直接在页面中引用 `dist/react-date-picker-cs.js` 及 `dist/ReactDatePicker.css`。

## 用法

下面用 jspm 中的用法做个说明：

```
import ReactDatePicker from 'react-date-picker-cs';
import 'react-date-picker-cs/dist/ReactDatePicker.css!';

<ReactDatePicker range={[1990, 2010]} onChange={...}/>
```

### 属性

* range {Array} 定义年份的范围
* onChange {Function} 日期变化的回调函数，函数参数为用户所选的日期

### 兼容情况

目前仅在 Mac 平台下最新版的 Firefox、Chrome 与 Safari 里测试过。

## 定制

如果你想在此基础上自定义或改造功能，组件的源代码在 `src` 目录下。

更多开发流程参见 [JedWatson/generator-react-component](https://github.com/JedWatson/generator-react-component)。

## License

MIT. Copyright (c) 2015 Sam Chen.


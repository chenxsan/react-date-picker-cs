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

## Demo & Examples

Live demo: [chenxsan.github.io/react-date-picker-cs](http://chenxsan.github.io/react-date-picker-cs/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-date-picker-cs is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-date-picker-cs.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-date-picker-cs --save
```


## Usage


```
var ReactDatePicker = require('react-date-picker-cs');

<ReactDatePicker>Example</ReactDatePicker>
```

### Properties

* range {Array} 定义年份的范围
* onChange {Function} 日期变化的回调函数，函数参数为用户所选的日期

### Notes

目前仅在 Mac 平台下的 Firefox、Chrome 与 Safari 里测试过。

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT. Copyright (c) 2015 Sam Chen.


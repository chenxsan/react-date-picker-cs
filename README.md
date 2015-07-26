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

__COMPONENT DESCRIPTION GOES HERE__


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

__EXPLAIN USAGE HERE__

```
var ReactDatePicker = require('react-date-picker-cs');

<ReactDatePicker>Example</ReactDatePicker>
```

### Properties

* __DOCUMENT PROPERTIES HERE__

### Notes

__ADDITIONAL USAGE NOTES__


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

__PUT LICENSE HERE__

Copyright (c) 2015 Sam Chen.


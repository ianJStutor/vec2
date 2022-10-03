# Vec2

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description

A 2d vector class.

Built with vanilla JavaScript, my favorite flavor!

## Author

> [Ian Marshall](https://ianjstutor.github.io/ian-marshall/)

## Live Site

> [https://ianjstutor.github.io/vec2/](https://ianjstutor.github.io/vec2/)

## Testing

```bash
npm test
```

Provided testing uses Jest on a Node environment. Please note that special configuration has been made for Node and for Jest to both use ECMAScript modules (<code>import</code> instead of the Common.js <code>require()</code>).

The following was inserted into <code>package.json</code> for testing to work.

```json
"type": "module",
"jest": {
    "transform": {}
},
"scripts": {
  "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
}
```

## Usage

Include <code>vec2.js</code> in your project. Import the JS into your main JavaScript file and call <code>new Vec2()</code>. The return value is an object...

### HTML

```html
<head>
    <script type="module" src="main.js"></script>
</head>
```

### JavaScript

```js
//main.js
import { Vec2 } from "./vec2.js";
const myVec = new Vec2();
```

## Documentation

### Module Export

```js
export { Vec2 };
```

### Static Methods



### Public Methods

#### constructor

```js
new Vec2()
```

Creates a new instance of an empty <code>Vec2</code>.

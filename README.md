# Vec2

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description

A 2d vector class. Vectors are useful for video game physics and particle animation. More specifically, vectors are great when used with an HTML canvas element's 2d context.

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

Include <code>vec2.js</code> in your project. Import the JS into your main JavaScript file and call <code>new Vec2()</code>. The return value is an object that represents a two-dimensional vector with two properties, <code>x</code> and <code>y</code>. From its methods you can get the vector's heading (angle) and magnitude (length). You can also perform calculations to alter the vector.

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

#### fromArr
Alias: <code>fromArray</code>

```js
Vec2.fromArr(arr)
```

Creates and returns an instance of <code>Vec2</code> when given a JavaScript array. The first value of the array will be the <code>x</code> component of the new <code>Vec2</code> and the second value of the array will be the <code>y</code> component of the new <code>Vec2</code>.

#### fromObj
Alias: <code>fromObject</code>

```js
Vec2.fromObj(obj)
```

Creates and returns an instance of <code>Vec2</code> when given a JavaScript object. The <code>x</code> value of the object will be the <code>x</code> component of the new <code>Vec2</code> and the <code>y</code> value of the object will be the <code>y</code> component of the new <code>Vec2</code>.

#### fromStr
Alias: <code>fromString</code>

```js
Vec2.fromStr(str)
```

Creates and returns an instance of <code>Vec2</code> when given a formatted JavaScript string in the pattern of <code>"x,y"</code>. The value to the left of the comma in the string will be the <code>x</code> component of the new <code>Vec2</code> and the value to the right of the comma in the string will be the <code>y</code> component of the new <code>Vec2</code>.

### Public Methods

#### constructor

```js
new Vec2()
```

Creates a new instance of an empty <code>Vec2</code>.

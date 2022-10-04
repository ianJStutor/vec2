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
_Alias: <code>fromArray</code>_

```js
Vec2.fromArr(arr)
```

Creates and returns an instance of <code>Vec2</code> when given a JavaScript array. The first value of the array will be the <code>x</code> component of the new <code>Vec2</code> and the second value of the array will be the <code>y</code> component of the new <code>Vec2</code>.

#### fromObj
_Alias: <code>fromObject</code>_

```js
Vec2.fromObj(obj)
```

Creates and returns an instance of <code>Vec2</code> when given a JavaScript object. The <code>x</code> value of the object will be the <code>x</code> component of the new <code>Vec2</code> and the <code>y</code> value of the object will be the <code>y</code> component of the new <code>Vec2</code>.

#### fromStr
_Alias: <code>fromString</code>_

```js
Vec2.fromStr(str)
```

Creates and returns an instance of <code>Vec2</code> when given a formatted JavaScript string in the pattern of <code>"x,y"</code>. The value to the left of the comma in the string will be the <code>x</code> component of the new <code>Vec2</code> and the value to the right of the comma in the string will be the <code>y</code> component of the new <code>Vec2</code>.

### Public Methods

#### constructor

```js
new Vec2()
new Vec2(x, y)
```

Creates a new instance of a <code>Vec2</code>. If <code>x</code> and <code>y</code> arguments are given, then those arguments will become the components of the new <code>Vec2</code>. If no arguments are given, then the <code>x</code> and <code>y</code> components will both be set to zero.

#### special <code>x,y</code> manipulators

##### flip
_Alias: <code>reverse</code>, <code>rev</code>, <code>flipXY</code>_


##### repair
_Alias: <code>fix</code>_

#### math

##### neg
_Alias: <code>negate</code>, <code>invert</code>, <code>inverse</code>_


##### negX
_Alias: <code>negateX</code>, <code>invertX</code>, <code>inverseX</code>_


##### negY
_Alias: <code>negateY</code>, <code>invertY</code>, <code>inverseY</code>_


##### zero

##### min

##### max

#### math with a scalar

##### addX

##### addY

##### subX
_Alias: <code>subtractX</code>_


##### subY
_Alias: <code>subtractY</code>_


##### mult
_Alias: <code>mul</code>, <code>multiply</code>, <code>scale</code>_


##### multX
_Alias: <code>mulX</code>, <code>multiplyX</code>, <code>scaleX</code>_


##### multY
_Alias: <code>mulY</code>, <code>multiplyY</code>, <code>scaleY</code>_


##### div
_Alias: <code>divide</code>_


##### divX
_Alias: <code>divideX</code>_


##### divY
_Alias: <code>divideY</code>_


#### math with another Vec2

##### add

##### sub
_Alias: <code>subtract</code>_


##### dot
_Alias: <code>dotProduct</code>_


##### cross
_Alias: <code>crossProduct</code>_


##### dist
_Alias: <code>distance</code>, <code>distanceTo</code>, <code>distanceFrom</code>, <code>distanceBetween</code>_


##### distSq
_Alias: <code>distanceSq</code>, <code>disatnceSquared</code>, <code>squareDistance</code>, <code>sqDistance</code>, <code>sqDist</code>_


#### assignment from another Vec2

##### copy
_Alias: <code>copyFrom</code>_


##### copyX
_Alias: <code>copyXFrom</code>_


##### copyY
_Alias: <code>copyYFrom</code>_


#### comparison with another Vec2

##### equals
_Alias: <code>equiv</code>_


##### angleBetween
_Alias: <code>angleTo</code>, <code>angleFrom</code>_


#### angles in radians

##### angle
_Alias: <code>dir</code>, <code>direction</code>, <code>heading</code>, <code>rotateTo</code>_


##### rotateBy
_Alias: <code>rotate</code>_


#### magnitude

##### mag
_Alias: <code>length</code>, <code>len</code>, <code>magnitude</code>_


##### magSq
_Alias: <code>magSquared</code>, <code>squareMag</code>, <code>magnitudeSq</code>, <code>magnitudeSquared</code>, <code>squareMagnitude</code>, <code>sqMagnitude</code>, <code>sqMag</code>, <code>lengthSquared</code>, <code>lenSquared</code>, <code>lengthSq</code>, <code>lenSq</code>, <code>squareLength</code>, <code>sqLength</code>, <code>sqLen</code>_


##### limit

##### clamp

##### norm
_Alias: <code>normalize</code>_


#### object utility

##### clone

##### toArr
_Alias: <code>toArray</code>_


##### toObj
_Alias: <code>toObject</code>_


##### toStr
_Alias: <code>toString</code>_

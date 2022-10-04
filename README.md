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
_Alias: <code>flipXY</code>_

```js
Vec2.prototype.flip()
```

The <code>x,y</code> components swap values. Returns the <code>Vec2</code> object so the method is chainable.

##### repair
_Alias: <code>fix</code>_

```js
Vec2.prototype.repair()
```

If either of the <code>x,y</code> components have a value that is <code>null</code>, <code>undefined</code>, or <code>NaN</code>, then its value is replaced with zero (<code>0</code>). Returns the <code>Vec2</code> object so the method is chainable.

#### math

##### neg
_Alias: <code>negate</code>, <code>reverse</code>, <code>rev</code>, <code>invert</code>, <code>inverse</code>_

```js
Vec2.prototype.neg()
```

The <code>x,y</code> components are each multiplied by <code>-1</code>. Returns the <code>Vec2</code> object so the method is chainable.

##### negX
_Alias: <code>negateX</code>, <code>invertX</code>, <code>inverseX</code>_

```js
Vec2.prototype.negX()
```

The <code>x</code> component is multiplied by <code>-1</code>. Returns the <code>Vec2</code> object so the method is chainable.

##### negY
_Alias: <code>negateY</code>, <code>invertY</code>, <code>inverseY</code>_

```js
Vec2.prototype.negY()
```

The <code>y</code> component is multiplied by <code>-1</code>. Returns the <code>Vec2</code> object so the method is chainable.

##### zero

```js
Vec2.prototype.zero()
```

The <code>x,y</code> components are both set to zero (<code>0</code>). Returns the <code>Vec2</code> object so the method is chainable.

##### min

```js
Vec2.prototype.min()
```

Returns the lesser of the <code>x,y</code> components.

##### max

```js
Vec2.prototype.max()
```

Returns the greater of the <code>x,y</code> components.

#### math with a scalar

##### addX

```js
Vec2.prototype.addX(scalar)
```

The scalar is added to the <code>x</code> component. Returns the <code>Vec2</code> object so the method is chainable.

##### addY

```js
Vec2.prototype.addY(scalar)
```

The scalar is added to the <code>y</code> component. Returns the <code>Vec2</code> object so the method is chainable.

##### subX
_Alias: <code>subtractX</code>_

```js
Vec2.prototype.subX(scalar)
```

The scalar is subtracted from the <code>x</code> component. Returns the <code>Vec2</code> object so the method is chainable.


##### subY
_Alias: <code>subtractY</code>_

```js
Vec2.prototype.subY(scalar)
```

The scalar is subtracted from the <code>y</code> component. Returns the <code>Vec2</code> object so the method is chainable.

##### mult
_Alias: <code>mul</code>, <code>multiply</code>, <code>scale</code>_

```js
Vec2.prototype.mult(scalar)
```

The scalar is multiplied with each of the <code>x,y</code> components. Returns the <code>Vec2</code> object so the method is chainable.

##### multX
_Alias: <code>mulX</code>, <code>multiplyX</code>, <code>scaleX</code>_

```js
Vec2.prototype.multX(scalar)
```

The scalar is multiplied to the <code>x</code> component. Returns the <code>Vec2</code> object so the method is chainable.

##### multY
_Alias: <code>mulY</code>, <code>multiplyY</code>, <code>scaleY</code>_

```js
Vec2.prototype.multY(scalar)
```

The scalar is multiplied to the <code>y</code> component. Returns the <code>Vec2</code> object so the method is chainable.

##### div
_Alias: <code>divide</code>_

```js
Vec2.prototype.div(scalar)
```

Each of the <code>x,y</code> components is divided by the scalar. Returns the <code>Vec2</code> object so the method is chainable.

##### divX
_Alias: <code>divideX</code>_

```js
Vec2.prototype.divX(scalar)
```

The <code>x</code> component is divided by the scalar. Returns the <code>Vec2</code> object so the method is chainable.

##### divY
_Alias: <code>divideY</code>_

```js
Vec2.prototype.divY(scalar)
```

The <code>y</code> component is divided by the scalar. Returns the <code>Vec2</code> object so the method is chainable.

#### math with another Vec2

##### add

```js
Vec2.prototype.add(otherVec2)
```

The <code>x,y</code> components are set to the sum of the <code>x,y</code> components of both Vec2 objects. Returns the <code>Vec2</code> object so the method is chainable.

##### sub
_Alias: <code>subtract</code>_

```js
Vec2.prototype.add(otherVec2)
```

The <code>x,y</code> components are set to the difference between the <code>x,y</code> components of both Vec2 objects. Returns the <code>Vec2</code> object so the method is chainable.

##### dot
_Alias: <code>dotProduct</code>_

```js
Vec2.prototype.dot(otherVec2)
```

Returns the dot product between both Vec2 objects.

##### cross
_Alias: <code>crossProduct</code>_

```js
Vec2.prototype.cross(otherVec2)
```

Returns the cross product between both Vec2 objects.

##### dist
_Alias: <code>distance</code>, <code>distanceTo</code>, <code>distanceFrom</code>, <code>distanceBetween</code>_

```js
Vec2.prototype.dist(otherVec2)
```

Returns the distance between both Vec2 objects.


##### distSq
_Alias: <code>distanceSq</code>, <code>disatnceSquared</code>, <code>squareDistance</code>, <code>sqDistance</code>, <code>sqDist</code>_

```js
Vec2.prototype.distSq(otherVec2)
```

Returns the distance between both Vec2 objects, squared.


#### assignment from another Vec2

##### copy
_Alias: <code>copyFrom</code>_

```js
Vec2.prototype.copy(otherVec2)
```

Sets the <code>x,y</code> components to the values of the <code>x,y</code> components from <code>otherVec2</code>. Returns the <code>Vec2</code> object so the method is chainable.


##### copyX
_Alias: <code>copyXFrom</code>_

```js
Vec2.prototype.copyX(otherVec2)
```

Sets the <code>x</code> component to the value of the <code>x</code> components from <code>otherVec2</code>. Returns the <code>Vec2</code> object so the method is chainable.

##### copyY
_Alias: <code>copyYFrom</code>_

```js
Vec2.prototype.copyY(otherVec2)
```

Sets the <code>y</code> component to the value of the <code>y</code> components from <code>otherVec2</code>. Returns the <code>Vec2</code> object so the method is chainable.

#### comparison with another Vec2

##### equals
_Alias: <code>equiv</code>_

```js
Vec2.prototype.equals(otherVec2)
```

Returns a Boolean indicating whether or not the <code>x</code> component equals the value of the <code>x</code> component of <code>otherVec2</code> and the <code>y</code> component equals the value of the <code>y</code> component of <code>otherVec2</code>.

##### angleBetween
_Alias: <code>angleTo</code>, <code>angleFrom</code>_

```js
Vec2.prototype.angleBetween(otherVec2)
```

Returns the angle (in radians) between both Vec2 objects.

#### angles in radians

##### angle
_Alias: <code>dir</code>, <code>direction</code>, <code>heading</code>, <code>rotateTo</code>_

```js
Vec2.prototype.angle()
Vec2.prototype.angle(radians)
```

If no argument is given, returns the angle (in radians) of the <code>Vec2</code> object.

If an argument is given, sets the angle (in radians) of the <code>Vec2</code> object to the <code>radians</code> argument. Returns the <code>Vec2</code> object so the method is chainable.

##### rotateBy
_Alias: <code>rotate</code>_

```js
Vec2.prototype.rotateBy(radians)
```

Sets the angle (in radians) of the <code>Vec2</code> object to the sum of its current angle and the <code>radians</code> argument. Returns the <code>Vec2</code> object so the method is chainable.

#### magnitude

##### mag
_Alias: <code>length</code>, <code>len</code>, <code>magnitude</code>_

```js
Vec2.prototype.mag()
Vec2.prototype.mag(length)
```

If no argument is given, returns the magnitude of the <code>Vec2</code> object.

If an argument is given, sets the magnitude of the <code>Vec2</code> object to the <code>length</code> argument. Returns the <code>Vec2</code> object so the method is chainable.

##### magSq
_Alias: <code>magSquared</code>, <code>squareMag</code>, <code>magnitudeSq</code>, <code>magnitudeSquared</code>, <code>squareMagnitude</code>, <code>sqMagnitude</code>, <code>sqMag</code>, <code>lengthSquared</code>, <code>lenSquared</code>, <code>lengthSq</code>, <code>lenSq</code>, <code>squareLength</code>, <code>sqLength</code>, <code>sqLen</code>_

```js
Vec2.prototype.magSq()
```

Returns the magnitude of the <code>Vec2</code> object, squared.

##### limit

```js
Vec2.prototype.limit(max)
```

If the magnitude is greater than the absolute value of <code>max</code>, then the magnitude is set to the absolute value of <code>max</code>. Returns the <code>Vec2</code> object so the method is chainable.

##### clamp

```js
Vec2.prototype.limit(min, max)
```

If the magnitude is less than the absolute value of <code>min</code>, then the magnitude is set to the absolute value of <code>min</code>. Otherwise, if the magnitude is greater than the absolute value of <code>max</code>, then the magnitude is set to the absolute value of <code>max</code>. <code>max</code> does not need to be greater than <code>min</code>; the values will be swapped if this is the case. Returns the <code>Vec2</code> object so the method is chainable.

##### norm
_Alias: <code>normalize</code>_

```js
Vec2.prototype.norm()
```
Normalizes the vector by setting the magnitude to one (<code>1</code>), making it a unit vector. Returns the <code>Vec2</code> object so the method is chainable.

#### object utility

##### clone

```js
Vec2.prototype.clone()
```
Returns a new <code>Vec2</code> object with the same <code>x,y</code> components.

##### toArr
_Alias: <code>toArray</code>_

```js
Vec2.prototype.toArr()
```
Returns an array with the <code>x,y</code> components as its first two elements.

##### toObj
_Alias: <code>toObject</code>_

```js
Vec2.prototype.toObj()
```
Returns an object literal with the <code>x,y</code> components as its properties.

##### toStr
_Alias: <code>toString</code>_

```js
Vec2.prototype.toStr()
```
Returns a string with the <code>x,y</code> components separated by a comma.

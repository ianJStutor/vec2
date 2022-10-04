class Vec2 {

    #x;
    #y;

    constructor(x = 0, y = 0) {
        this.#x = Number(x);
        this.#y = Number(y);
    }

    //private setter
    #xy(a, m) {
        //set x,y from angle and magnitude
        this.#x = Math.cos(a) * m;
        this.#y = Math.sin(a) * m;
    }

    //public getters and setters
    get x() { return this.#x; }
    get y() { return this.#y; }
    set x(n) { this.#x = Number(n); }
    set y(n) { this.#y = Number(n); }

    //special x,y manipulators
    flip() {
        //x becomes y, y becomes x
        [this.#x, this.#y] = [this.#y, this.#x];
        return this;
    }
    repair() {
        //any null, undefined, or NaN becomes zero
        if ([null, undefined, NaN].includes(this.#x)) this.#x = 0;
        if ([null, undefined, NaN].includes(this.#y)) this.#y = 0;
        return this;
    }

    //math
    neg() {
        //reverse sign of x and y
        return this.mult(-1);
    }
    negX() {
        //reverse sign of x
        return this.multX(-1);
    }
    negY() {
        //reverse sign of y
        return this.multY(-1);
    }
    zero() {
        //set both x,y to 0
        return this.mult(0);
    }
    min() {
        return Math.min(this.#x, this.#y);
    }
    max() {
        return Math.max(this.#x, this.#y);
    }

    //math with a scalar
    addX(n) {
        //add number n to x
        this.#x += n;
        return this;
    }
    addY(n) {
        //add number n to y
        this.#y += n;
        return this;
    }
    subX(n) {
        //subtract number n from x
        this.#x -= n;
        return this;
        return this;
    }
    subY(n) {
        //subtract number n from y
        this.#y -= n;
        return this;
    }
    mult(n) {
        //multiply by scalar number n
        this.#x *= n;
        this.#y *= n;
        return this;
    }
    multX(n) {
        //multiply x by scalar number n
        this.#x *= n;
        return this;
    }
    multY(n) {
        //multiply y by scalar number n
        this.#y *= n;
        return this;
    }
    div(n) {
        //divide by scalar number n
        this.#x /= n;
        this.#y /= n;
        return this;
    }
    divX(n) {
        //divide x by scalar number n
        this.#x /= n;
        return this;
    }
    divY(n) {
        //divide y by scalar number n
        this.#y /= n;
        return this;
    }

    //math with another Vec2
    add(v) {
        //add Vec2 v
        this.#x += v.x;
        this.#y += v.y;
        return this;
    }
    sub(v) {
        //subtract Vec2 v
        this.#x -= v.x;
        this.#y -= v.y;
        return this;
    }
    dot(v) {
        //dot product with Vec2 v
        return this.#x * v.x + this.#y * v.y;
    }
    cross(v) {
        //cross product with Vec2 v
        return this.#x * v.y - this.#y * v.x;
    }
    dist(v) {
        //distance between this and Vec2 v
        return Math.sqrt(this.distSq(v));
    }
    distSq(v) {
        //distance between this and Vec2 v squared
        const distX = this.#x - v.x;
        const distY = this.#y - v.y;
        return distX * distX + distY * distY;
    }

    //assignment from another Vec2
    copy(v) {
        //copy values from Vec2 v
        this.#x = v.x;
        this.#y = v.y;
        return this;
    }
    copyX(v) {
        //copy x value from Vec2 v
        this.#x = v.x;
        return this;
    }
    copyY(v) {
        //copy y value from Vec2 v
        this.#y = v.y;
        return this;
    }

    //comparison with another Vec2
    equals(v) {
        //same as Vec2 v?
        return this.#x === v.x && this.#y === v.y;
    }
    angleBetween(v) {
        //find angle between this and Vec2 v
        return Math.acos(this.dot(v)/(this.mag()*v.mag()));
    }

    //angles in radians
    angle(a) {
        //get angle in radians
        if (a === undefined) return Math.atan2(this.#y, this.#x);
        //set angle in radians
        const m = this.mag();
        this.#xy(a, m);
        return this;
    }
    rotateBy(a) {
        //add to current angle in radians
        return this.angle(this.angle() + a);
    }

    //magnitude
    mag(m) {
        //get magnitude
        if (m === undefined) return Math.sqrt(this.magSq());
        //set magnitude
        const a = this.angle();
        this.#xy(a, m);
        return this;
    }
    magSq() {
        //get magnitude squared
        return this.#x * this.#x + this.#y * this.#y;
    }
    limit(max) {
        if (this.magSq() > max * max) return this.mag(Math.abs(max));
    }
    clamp(min, max) {
        const m = this.magSq();
        const low = Math.min(min, max);
        const hi = Math.max(min, max);
        if (m < low * low) return this.mag(Math.abs(low));
        else return this.limit(hi);
    }
    norm() {
        //normalize to unit vector (magnitude of 1)
        return this.mag(1);
    }

    //object utility
    clone() {
        return new Vec2(this.#x, this.#y);
    }
    toArr() {
        return [this.#x, this.#y];
    }
    toObj() {
        return {x: this.#x, y: this.#y};
    }
    toStr() {
        return `${this.#x},${this.#y}`;
    }

    //static object utiltiy
    static fromArr(arr) {
        return new Vec2(...arr);
    }
    static fromObj(obj) {
        return new Vec2(obj.x, obj.y);
    }
    static fromStr(str) {
        return new Vec2(...str.split(",").map(Number));
    }

}

//aliases
Vec2.prototype.fromArray = Vec2.prototype.fromArr;
Vec2.prototype.fromObject = Vec2.prototype.fromObj;
Vec2.prototype.fromString = Vec2.prototype.fromStr;
Vec2.prototype.reverse = Vec2.prototype.flip;
Vec2.prototype.rev = Vec2.prototype.flip;
Vec2.prototype.flipXY = Vec2.prototype.flip;
Vec2.prototype.fix = Vec2.prototype.repair;
Vec2.prototype.negate = Vec2.prototype.neg;
Vec2.prototype.invert = Vec2.prototype.neg;
Vec2.prototype.inverse = Vec2.prototype.neg;
Vec2.prototype.negateX = Vec2.prototype.negX;
Vec2.prototype.invertX = Vec2.prototype.negX;
Vec2.prototype.inverseX = Vec2.prototype.negX;
Vec2.prototype.negateY = Vec2.prototype.negY;
Vec2.prototype.invertY = Vec2.prototype.negY;
Vec2.prototype.inverseY = Vec2.prototype.negY;
Vec2.prototype.subtractX = Vec2.prototype.subX;
Vec2.prototype.subtractY = Vec2.prototype.subY;
Vec2.prototype.mul = Vec2.prototype.mult;
Vec2.prototype.multiply = Vec2.prototype.mult;
Vec2.prototype.scale = Vec2.prototype.mult;
Vec2.prototype.mulX = Vec2.prototype.multX;
Vec2.prototype.multiplyX = Vec2.prototype.multX;
Vec2.prototype.scaleX = Vec2.prototype.multX;
Vec2.prototype.mulY = Vec2.prototype.multY;
Vec2.prototype.multiplyY = Vec2.prototype.multY;
Vec2.prototype.scaleY = Vec2.prototype.multY;
Vec2.prototype.divide = Vec2.prototype.div;
Vec2.prototype.divideX = Vec2.prototype.divX;
Vec2.prototype.divideY = Vec2.prototype.divY;
Vec2.prototype.subtract = Vec2.prototype.sub;
Vec2.prototype.dotProduct = Vec2.prototype.dot;
Vec2.prototype.crossProduct = Vec2.prototype.cross;
Vec2.prototype.distance = Vec2.prototype.dist;
Vec2.prototype.distanceTo = Vec2.prototype.dist;
Vec2.prototype.distanceFrom = Vec2.prototype.dist;
Vec2.prototype.distanceBetween = Vec2.prototype.dist;
Vec2.prototype.distanceSq = Vec2.prototype.distSq;
Vec2.prototype.distanceSquared = Vec2.prototype.distSq;
Vec2.prototype.squareDistance = Vec2.prototype.distSq;
Vec2.prototype.sqDistance = Vec2.prototype.distSq;
Vec2.prototype.sqDist = Vec2.prototype.distSq;
Vec2.prototype.copyFrom = Vec2.prototype.copy;
Vec2.prototype.copyXFrom = Vec2.prototype.copyX;
Vec2.prototype.copyYFrom = Vec2.prototype.copyY;
Vec2.prototype.equiv = Vec2.prototype.equals;
Vec2.prototype.angleTo = Vec2.prototype.angleBetween;
Vec2.prototype.angleFrom = Vec2.prototype.angleBetween;
Vec2.prototype.dir = Vec2.prototype.angle;
Vec2.prototype.direction = Vec2.prototype.angle;
Vec2.prototype.heading = Vec2.prototype.angle;
Vec2.prototype.rotateTo = Vec2.prototype.angle;
Vec2.prototype.rotate = Vec2.prototype.rotateBy;
Vec2.prototype.length = Vec2.prototype.mag;
Vec2.prototype.len = Vec2.prototype.mag;
Vec2.prototype.magnitude = Vec2.prototype.mag;
Vec2.prototype.magSquared = Vec2.prototype.magSq;
Vec2.prototype.squareMag = Vec2.prototype.magSq;
Vec2.prototype.magnitudeSq = Vec2.prototype.magSq;
Vec2.prototype.magnitudeSquared = Vec2.prototype.magSq;
Vec2.prototype.squareMagnitude = Vec2.prototype.magSq;
Vec2.prototype.sqMagnitude = Vec2.prototype.magSq;
Vec2.prototype.sqMag = Vec2.prototype.magSq;
Vec2.prototype.lengthSquared = Vec2.prototype.magSq;
Vec2.prototype.lenSquared = Vec2.prototype.magSq;
Vec2.prototype.lengthSq = Vec2.prototype.magSq;
Vec2.prototype.lenSq = Vec2.prototype.magSq;
Vec2.prototype.squareLength = Vec2.prototype.magSq;
Vec2.prototype.sqLength = Vec2.prototype.magSq;
Vec2.prototype.sqLen = Vec2.prototype.magSq;
Vec2.prototype.normalize = Vec2.prototype.norm;
Vec2.prototype.toArray = Vec2.prototype.toArr;
Vec2.prototype.toObject = Vec2.prototype.toObj;
Vec2.prototype.toString = Vec2.prototype.toStr;

export { Vec2 };

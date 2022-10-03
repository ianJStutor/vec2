class Vec2 {

    #x;
    #y;

    constructor(x = 0, y = 0) {
        this.#x = x;
        this.#y = y;
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
    set x(n) { this.#x = n; }
    set y(n) { this.#y = n; }

    //math
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
    mult(n) {
        //multiply by scalar number n
        this.#x *= n;
        this.#y *= n;
        return this;
    }
    divide(n) {
        //divide by scalar number n
        this.#x /= n;
        this.#y /= n;
        return this;
    }
    neg() {
        //reverse sign of x and y
        return this.mult(-1);
    }
    negX() {
        //reverse sign of x
        this.#x *= -1;
        return this;
    }
    negY() {
        //reverse sign of y
        this.#y *= -1;
        return this;
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

    //math with another Vec2
    dot(v) {
        //dot product with Vec2 v
        return this.#x * v.x + this.#y * v.y;
    }
    equals(v) {
        //same as Vec2 v?
        return this.#x === v.x && this.#y === v.y;
    }
    cross(v) {
        //cross product with Vec2 v
        return this.#x * v.y - this.#y * v.x;
    }

    //angles
    angle(a) {
        //get angle
        if (a === undefined) return Math.atan2(this.#y, this.#x);
        //set angle
        const m = this.mag();
        this.#xy(a, m);
        return this;
    }
    rotateBy(a) {
        //add to current angle
        return this.angle(this.angle() + a);
    }

    //angles with another Vec2
    angleBetween(v) {
        //find angle between this and Vec2 v
        return Math.acos(this.dot(v)/(this.mag()*v.mag()));
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
    norm() {
        //normalize to unit vector (magnitude of 1)
        return this.mag(1);
    }

    //object
    clone() {
        return new Vec2(this.#x, this.#y);
    }
    toObj() {
        return {x: this.#x, y: this.#y};
    }
    toArray() {
        return [this.#x, this.#y];
    }
    toString() {
        return `${this.#x},${this.#y}`;
    }

}

export { Vec2 };

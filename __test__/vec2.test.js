import { Vec2 } from "../vec2.js";

describe("Base functionality", () => {
    const v = new Vec2();
    test("creates an instance of Vec2 class", () => {
        expect(v).toBeInstanceOf(Vec2);
    });
    test("has x property that is a number", () => {
        expect(typeof v.x).toBe("number");
    });
    test("has y property that is a number", () => {
        expect(typeof v.y).toBe("number");
    });
    test("undefined x property is set to zero", () => {
        expect(v.x).toBe(0);
    });
    test("undefined y property is set to zero", () => {
        expect(v.y).toBe(0);
    });
});

describe("Getters and setters as arguments", () => {
    const x = 3,
          y = 6,
          v = new Vec2(x, y);
    test("property x can be set as an argument", () => {
        expect(v.x).toBe(x);
    });
    test("property y can be set as an argument", () => {
        expect(v.y).toBe(y);
    });
});

describe("Getters and setters as expressions", () => {
    const x = 3,
          y = 6,
          v = new Vec2();
    v.x = x;
    v.y = y;
    test("property x can be set as an expression", () => {
        expect(v.x).toBe(x);
    });
    test("property y can be set as an expression", () => {
        expect(v.y).toBe(y);
    });
});

describe("Special x,y manipulators methods", () => {
    const x1 = 3,
          y1 = 6,
          x2 = undefined,
          y2 = null,
          x3 = NaN,
          y3 = undefined,
          v1 = new Vec2(x1, y1),
          v2 = new Vec2(x2, y2),
          v3 = new Vec2(x3, y3);
    v1.flip();
    v2.repair();
    v3.fix(); //alias of repair
    test("can flip x,y values", () => {
        expect(v1.x).toBe(y1);
        expect(v1.y).toBe(x1);
    });
    test("can repair x,y values that are null, undefined, or NaN", () => {
        expect(v2.x).toBe(0);
        expect(v2.y).toBe(0);
        expect(v3.x).toBe(0);
        expect(v3.y).toBe(0);
    });
});

describe("Math methods", () => {
    const x = 3,
          y = 6,
          v1 = new Vec2(x, y),
          v2 = new Vec2(x, y),
          v3 = new Vec2(x, y);
    v2.zero();
    test("can negate x,y or both", () => {
        expect(v1.neg().toStr()).toBe(`${-x},${-y}`);
        expect(v1.negX().x).toBe(x);
        expect(v1.negY().y).toBe(y);
    });
    test("can be zeroed out", () => {
        expect(v2.x).toBe(0);
        expect(v2.y).toBe(0);
    });
    test("can return min and max x,y values", () => {
        expect(v3.min()).toBe(Math.min(x, y));
        expect(v3.max()).toBe(Math.max(x, y));
    });
});

describe("Math with a scalar methods", () => {
    const x = 3,
          y = 6,
          v = new Vec2(x, y);
    test("can add to x,y individually", () => {
        expect(v.addX(1).x).toBe(x + 1);
        expect(v.addY(1).y).toBe(y + 1);
    });
    test("can subtract from x,y individually", () => {
        expect(v.subX(1).x).toBe(x);
        expect(v.subY(1).y).toBe(y);
    });
    test("can multiply both x,y", () => {
        expect(v.mult(2).x).toBe(x * 2);
        expect(v.y).toBe(y * 2);
    });
    test("can multiply x,y individually", () => {
        expect(v.multX(2).x).toBe(x * 4);
        expect(v.multY(2).y).toBe(y * 4);
    });
    test("can divide both x,y", () => {
        expect(v.div(2).x).toBe(x * 2);
        expect(v.y).toBe(y * 2);
    });
    test("can divide x,y individually", () => {
        expect(v.divX(2).x).toBe(x);
        expect(v.divY(2).y).toBe(y);
    });
});

describe("Math with another Vec2 methods", () => {
    const x1 = 0,
          y1 = 3,
          x2 = 4,
          y2 = 0,
          d = 5,
          dot = 0,
          cross = -12,
          v1 = new Vec2(x1, y1),
          v2 = new Vec2(x2, y2);
    test("can find distance to another Vec2", () => {
        expect(v1.dist(v2)).toBe(d);
    });
    test("can find distance squared to another Vec2", () => {
        expect(v1.distSq(v2)).toBe(d * d);
    });
    test("can find dot product with another Vec2", () => {
        expect(v1.dot(v2)).toBe(dot);
    });
    test("can find cross product with another Vec2", () => {
        expect(v1.cross(v2)).toBe(cross);
    });
    test("can add another Vec2 to itself", () => {
        expect(v1.add(v2).x).toBe(x1 + x2);
        expect(v1.y).toBe(y1 + y2);
    });
    test("can subtract another Vec2 from itself", () => {
        expect(v1.sub(v2).x).toBe(x1);
        expect(v1.y).toBe(y1);
    });
});

describe("Assignment from another Vec2 methods", () => {
    const x = 3,
          y = 6,
          v = new Vec2(),
          v1 = new Vec2(x, y),
          v2 = new Vec2(x * 2, y * 2);
    test("can copy x,y values from another Vec2", () => {
        expect(v.copy(v1).x).toBe(x);
        expect(v.y).toBe(y);
    });
    test("can copy x,y values individually from another Vec2", () => {
        expect(v.copyX(v2).x).toBe(x * 2);
        expect(v.copyY(v2).y).toBe(y * 2);
    });
});

describe("Comparison with another Vec2 methods", () => {
    const x = 3,
          y = 0,
          a = 1.25,
          v = new Vec2(x, y),
          v1 = new Vec2(x, y),
          v2 = new Vec2(x, y);
    v2.rotateBy(a);
    test("can determine equivalency between Vec2 objects", () => {
        expect(v.equals(v1)).toBe(true);
        expect(v.equals(v2)).toBe(false);
    });
    test("can return angle between two Vec2 objects", () => {
        expect(v.angleBetween(v1)).toBe(0);
        expect(v.angleBetween(v2)).toBe(a);
    });
});

describe("Angle methods", () => {
    const x = 3,
          y = 0,
          a = 1.25,
          v = new Vec2(x, y);
    test("can get and set angle", () => {
        expect(v.angle()).toBe(0);
        expect(v.angle(a).angle()).toBe(a);
    });
    test("can rotate by an angle", () => {
        expect(v.angle(0).rotateBy(a).angle()).toBe(a);
    });
});

describe("Magnitude methods", () => {
    const x = 3,
          y = 4,
          m = 5,
          min = 8,
          max = 10,
          norm = 1,
          v = new Vec2(x, y);
    test("can get the magnitude", () => {
        expect(v.mag()).toBe(m);
    });
    test("can get the magnitude squared", () => {
        expect(v.magSq()).toBe(m * m);
    });
    test("can clamp a minimum on the magnitude", () => {
        expect(v.clamp(min, max).mag()).toBe(min);
    });
    test("can clamp a maximum on the magnitude", () => {
        expect(v.clamp(min/3, min/2).mag()).toBe(min/2);
    });
    test("can limit a maximum on the magnitude", () => {
        expect(v.limit(min/4).mag()).toBe(min/4);
    });
    test("can normalize the magnitude", () => {
        expect(v.norm().mag()).toBe(norm);
    });
});

describe("Object utilities", () => {
    const x = 3,
          y = 6,
          a = [x, y],
          o = {x, y},
          s = `${x},${y}`,
          v = new Vec2(x, y),
          c = v.clone();
    test("can be converted to an array", () => {
        expect(JSON.stringify(v.toArr())).toBe(JSON.stringify(a));
    });
    test("can be converted to an object", () => {
        expect(JSON.stringify(v.toObj())).toBe(JSON.stringify(o));
    });
    test("can be converted to a string", () => {
        expect(v.toStr()).toBe(s);
    });
});

describe("Static object utilities", () => {
    const x = 3,
          y = 6,
          arr = [x, y],
          obj = {x, y},
          str = `${x},${y}`,
          a = Vec2.fromArr(arr),
          o = Vec2.fromObj(obj),
          s = Vec2.fromStr(str);
    test("vec2 can be created from an array via static method", () => {
        expect(a.x).toBe(x);
        expect(a.y).toBe(y);
    });
    test("vec2 can be created from an object via static method", () => {
        expect(o.x).toBe(x);
        expect(o.y).toBe(y);
    });
    test("vec2 can be created from a string via static method", () => {
        expect(s.x).toBe(x);
        expect(s.y).toBe(y);
    });
});

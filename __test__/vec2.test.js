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

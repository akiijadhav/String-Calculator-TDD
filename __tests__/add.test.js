/* global describe, test, expect */
const add = require("../add");

describe("String Calculator - add(string)", () => {
    test("returns 0 for empty string", () => {
        expect(add("")).toBe(0);
    });

    test("returns the number itself for single input", () => {
        expect(add("1")).toBe(1);
    });

    test("returns the sum for two numbers", () => {
        expect(add("1,5")).toBe(6);
    });
});

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

    test("returns the sum for multiple numbers", () => {
        expect(add("1,2,3,4,5")).toBe(15);
        expect(add("10,20,30")).toBe(60);
    });
});

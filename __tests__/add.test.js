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

    test("accepts newlines as alternative delimiters to commas and returns sum", () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test("supports custom single-character delimiters and returns sum", () => {
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//|\n4|5|6")).toBe(15);
    });

    test("throws an error for negative numbers with the correct message", () => {
        expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
        expect(() => add("-1,-5")).toThrow("negative numbers not allowed -1,-5");
    });

    test("ignores non-numeric values and returns the sum of valid numbers", () => {
        expect(add("1,abc,2")).toBe(3);
        expect(add("4,5,xyz,6")).toBe(15);
    });

    test("handles custom delimiters with regex special characters", () => {
        expect(add("//.\n1.2.3")).toBe(6);
        expect(add("//*\n1*2*3")).toBe(6);
        expect(add("//+\n1+2+3")).toBe(6);
        expect(add("//?\n1?2?3")).toBe(6);
        expect(add("//^\n1^2^3")).toBe(6);
        expect(add("//$\n1$2$3")).toBe(6);
        expect(add("//|\n1|2|3")).toBe(6);
        expect(add("//()\n1(2(3")).toBe(6);
        expect(add("//[]\n1[2[3")).toBe(6);
        expect(add("//{}\n1{2{3")).toBe(6);
        expect(add("//\\\n1\\2\\3")).toBe(6);
    });

});

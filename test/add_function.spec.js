import { assert } from "chai";
import { add } from "../add_function.js";

describe("add function with input as empty string", () => {
  it("should return 0 for empty string", () => {
    const result = add("");
    assert.equal(result, 0);
  });
});
describe("add function with one number in input string", () => {
  it("should return number in the string", () => {
    const result = add("1");
    assert.equal(result, 1);
  });
});
describe("add function with two numbers in input string", () => {
  it("should return sum of numbers in the string", () => {
    const result = add("1,5");
    assert.equal(result, 6);
  });
});
describe("add function with multiple numbers in input string", () => {
  it("should return sum of numbers in the string", () => {
    const result = add("1,2,3,4,5");
    assert.equal(result, 15);
  });
});
describe("add function with multiple numbers in input string and \n as delimiter", () => {
  it("should return sum of numbers in the string", () => {
    const result = add("1\n2,3");
    assert.equal(result, 6);
  });
});
describe("add function with delimiter and multiple numbers in input string", () => {
  it("should return sum of numbers in the string", () => {
    const result = add("//;\n1;2");
    assert.equal(result, 3);
  });
});
describe("add function with negative numbers in input string", () => {
  it("should return sum of numbers in the string", () => {
    const result = add("//;\n-1;-2");
    assert.equal(result, "negative numbers not allowed -1,-2");
  });
});
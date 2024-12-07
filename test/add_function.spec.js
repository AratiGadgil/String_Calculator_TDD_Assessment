import { assert } from "chai";
import { add } from "../add_function.js";
describe("add function with empty string", () => {
  it("should return 0 for empty string", () => {
    const result = add("");
    assert.equal(result, 0);
  });
});
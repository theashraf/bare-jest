const { describe, it, expect } = require("../../basic-jest");
const { add, subtract } = require("../math");

describe("add", () => {
  it("should add two numbers", () => {
    const result = add(1, 2);
    const expected = 3;

    expect(result).toBe(expected);
  });
});

describe("subtract", () => {
  it("should subtract two numbers", () => {
    const result = subtract(1, 2);
    const expected = -1;

    expect(result).toBe(expected);
  });
});

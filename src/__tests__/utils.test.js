const { describe, it, expect } = require("../../basic-jest");
const { toUpperCase } = require("../utils");

describe("utils", () => {
  describe("toUpperCase", () => {
    it("should return str in ubber case", () => {
      const result = toUpperCase("abc");
      const expected = "ABC";
      expect(result).toBe(expected);
    });

    it("should throw error if parameter is not string", () => {
      try {
        const result = toUpperCase(12);
      } catch (error) {
        expect(error.message).toBe("invalid string parameter");
      }
    });
  });
});

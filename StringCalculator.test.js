const StringCalculator = require("./StringCalculator");

describe("String calculator", () => {
  test("should return 0 if string is empty", () => {
    expect(StringCalculator("")).toBe(0);
  });
  test("should return the number itself for single input", () => {
    expect(StringCalculator("5")).toBe(5);
  });
  test("should return sum of commas separated string", () => {
    expect(StringCalculator("1,2,3")).toBe(6);
  });
});

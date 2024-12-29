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
  test("should return 0 for empty input with delimiter", () => {
    expect(StringCalculator("//;\n")).toBe(0);
  });
  test("should return the sum of numbers separated by newlines", () => {
    expect(StringCalculator("4\n5\n6")).toBe(15);
  });
  test("should return the single number with delimiter", () => {
    expect(StringCalculator("//;\n1")).toBe(1);
  });
  test("should handle delimiter string with sum of number;", () => {
    expect(StringCalculator("//;\n1;2,3\n4")).toBe(10);
  });
  test("should throw an error for negative number", () => {
    expect(() => StringCalculator("1,-2,3")).toThrow(
      "Negatives not allowed: -2"
    );
  });
  test("should throw an error for multiple negative numbers", () => {
    expect(() => StringCalculator("1,-2,-3")).toThrow(
      "Negatives not allowed: -2, -3"
    );
  });
  test("should throw an error for multiple negative numbers in delimiter format", () => {
    expect(() => StringCalculator("//;\n1;-2;-3")).toThrow(
      "Negatives not allowed: -2, -3"
    );
  });
  test("should return sum if number greater than 1000 is included", () => {
    expect(StringCalculator("//;\n1;500;1001")).toBe(1502);
  });
});

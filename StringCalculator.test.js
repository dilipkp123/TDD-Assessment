const StringCalculator = require("./StringCalculator");

describe("String calculator", () => {
  test("should return 0 if string is empty", () => {
    expect(StringCalculator("")).toBe(0);
  });
});

function StringCalculator(string) {
  if (!string) return 0;

  let delimiter = ",";

  if (string.startsWith("//")) {
    const delimiterSectionEnd = string.indexOf("\n");
    delimiter = string.slice(2, delimiterSectionEnd);
    string = string.slice(delimiterSectionEnd + 1);
  }

  if (string === "") return 0;

  const numArray = string
    .split(delimiter)
    .join(",")
    .split(",")
    .join("\n")
    .split("\n")
    .map((str) => {
      const num = Number(str);
      return isNaN(num) ? 0 : num;
    });

  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((acc, num) => acc + num, 0);
}

module.exports = StringCalculator;

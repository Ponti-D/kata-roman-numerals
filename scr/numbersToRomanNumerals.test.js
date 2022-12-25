const convertNumbersToRomanNumerals = require('./numbersToRomanNumerals');

const cases = [[1,"I"], [5,"V"], [10,"X"], [50,"L"], [100,"C"],
[8,"VIII"],[12,"XII"], [4,"IV"], [9,"IX"],[18,"XVIII"],[28,"XXVIII"]];

describe("convert numbers to roman numerals", () => {
  test.each(cases)(
    "given %p arguments, returns %p",
    (number, expectedResult) => {
      const result = convertNumbersToRomanNumerals(number);
      expect(result).toEqual(expectedResult);
    }
  );
});
